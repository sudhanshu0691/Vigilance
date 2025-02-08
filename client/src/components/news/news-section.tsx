import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const newsItems = [
  {
    id: 1,
    title: "Severe Storm Warning Issued",
    description: "Meteorologists predict heavy rainfall and strong winds...",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1561484930-974554019ade",
  },
  {
    id: 2,
    title: "Coastal Areas on High Alert",
    description: "Rising sea levels prompt evacuation warnings...",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1561553873-e8491a564fd0",
  },
  {
    id: 3,
    title: "Drought Conditions Worsen",
    description: "Multiple regions face water scarcity concerns...",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2",
  }
];

export function NewsSection() {
  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-4 pr-4">
        {newsItems.map((item) => (
          <Card key={item.id} className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {item.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">{item.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
