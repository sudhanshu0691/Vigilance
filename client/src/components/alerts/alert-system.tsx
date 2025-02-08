import { useEffect, useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Alert = {
  id: string;
  type: "warning" | "danger" | "info";
  title: string;
  message: string;
  area: string;
  timestamp: number;
};

export function AlertSystem() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Connect to WebSocket server
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("Connected to alert system");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.type === 'alerts') {
        setAlerts(data.data);
      } else if (data.type === 'new-alert') {
        setAlerts(prev => [...prev, data.data]);
        // Show toast notification for new alerts
        toast({
          title: data.data.title,
          description: data.data.message,
          variant: data.data.type === 'danger' ? 'destructive' : 'default',
        });
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      toast({
        title: "Connection Error",
        description: "Failed to connect to alert system",
        variant: "destructive",
      });
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'danger':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getAlertStyle = (type: Alert['type']) => {
    switch (type) {
      case 'danger':
        return 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 space-y-2">
      {alerts.slice(-3).map((alert) => (
        <Alert key={alert.id} className={`${getAlertStyle(alert.type)} shadow-lg`}>
          <div className="flex items-start gap-2">
            {getAlertIcon(alert.type)}
            <div>
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>
                {alert.message}
                <div className="mt-1 text-xs opacity-70">
                  Area: {alert.area}
                </div>
              </AlertDescription>
            </div>
          </div>
        </Alert>
      ))}
    </div>
  );
}
