import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import * as crypto from 'crypto';

// Create a type for our alert data
type Alert = {
  id: string;
  type: "warning" | "danger" | "info";
  title: string;
  message: string;
  area: string;
  timestamp: number;
};

const alerts: Alert[] = [];

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  app.patch("/api/user/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    if (req.user.id !== parseInt(req.params.id)) return res.sendStatus(403);

    try {
      const user = await storage.updateUser(req.user.id, req.body);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  });

  // Get current alerts
  app.get("/api/alerts", (req, res) => {
    res.json(alerts);
  });

  const httpServer = createServer(app);

  // Setup WebSocket server for real-time alerts
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });

  wss.on('connection', (ws) => {
    // Send existing alerts to new clients
    ws.send(JSON.stringify({ type: 'alerts', data: alerts }));

    // Broadcast alerts to all connected clients
    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        if (data.type === 'new-alert') {
          const alert: Alert = {
            id: crypto.randomUUID(),
            ...data.alert,
            timestamp: Date.now()
          };
          alerts.push(alert);

          // Broadcast to all connected clients
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({ type: 'new-alert', data: alert }));
            }
          });
        }
      } catch (error) {
        console.error('WebSocket message error:', error);
      }
    });
  });

  return httpServer;
}