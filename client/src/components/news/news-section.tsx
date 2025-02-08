import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

const newsItems = [
  {
    id: 1,
    title: "Severe Storm Warning Issued",
    description: "Meteorologists predict heavy rainfall and strong winds in the coastal regions. Residents are advised to take necessary precautions.",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    category: "Warning",
    image: "https://images.unsplash.com/photo-1561484930-974554019ade",
  },
  {
    id: 2,
    title: "Coastal Areas on High Alert",
    description: "Rising sea levels prompt evacuation warnings for low-lying coastal areas. Emergency services are on standby.",
    time: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    category: "Alert",
    image: "https://images.unsplash.com/photo-1561553873-e8491a564fd0",
  },
  {
    id: 3,
    title: "Drought Conditions Worsen",
    description: "Multiple regions face water scarcity concerns as drought conditions persist. Conservation measures are being implemented.",
    time: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    category: "Update",
    image: "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2",
  }
];

export function NewsSection() {
  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-4 pr-4">
        {newsItems.map((item) => (
          <Card key={item.id} className="cursor-pointer hover:bg-accent/50 transition-colors dark:hover:bg-accent/20">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium line-clamp-1">{item.title}</h3>
                    <Badge variant={item.category === "Warning" ? "destructive" : "secondary"}>
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(item.time, { addSuffix: true })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}