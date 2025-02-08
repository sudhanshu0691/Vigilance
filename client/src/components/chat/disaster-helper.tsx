import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";

type Message = {
  type: "user" | "bot";
  content: string;
};

export function DisasterHelper() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hi! I'm your disaster preparedness assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);

    // In a real implementation, this would call the Perplexity API
    // For now, we'll add a mock response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "I'm here to help with disaster-related information. Please note that for immediate emergency assistance, always call your local emergency services first.",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0 shadow-lg"
        onClick={() => setOpen(true)}
      >
        <MessageCircle />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] h-[600px] flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Disaster Helper</DialogTitle>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
