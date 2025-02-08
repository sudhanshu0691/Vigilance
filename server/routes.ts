import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";

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

  const httpServer = createServer(app);
  return httpServer;
}
