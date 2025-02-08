import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const disasterImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1579003593419-98f949b9398f",
    title: "Hurricane Impact",
    location: "Atlantic Coast",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1561484930-974554019ade",
    title: "Flood Warning",
    location: "Midwest Region",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1562155955-1cb2d73488d7",
    title: "Severe Storms",
    location: "Pacific Northwest",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2",
    title: "Drought Alert",
    location: "Southwest Region",
  },
];

export function DisasterCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {disasterImages.map((item) => (
          <CarouselItem key={item.id}>
            <Card className="border-none">
              <CardContent className="p-0 relative aspect-video">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm opacity-90">{item.location}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
