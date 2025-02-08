import { DisasterCarousel } from "@/components/home/disaster-carousel";
import { NewsSection } from "@/components/news/news-section";
import { WeatherCard } from "@/components/weather/weather-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Alert className="bg-yellow-50 border-yellow-200">
        <AlertCircle className="h-4 w-4 text-yellow-600" />
        <AlertTitle>Weather Alert</AlertTitle>
        <AlertDescription>
          Heavy rainfall expected in coastal areas. Please stay informed.
        </AlertDescription>
      </Alert>

      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Weather Detection System</h1>
        <p className="text-lg text-muted-foreground">
          Stay informed about weather conditions and natural disasters in your area
        </p>
      </section>

      <DisasterCarousel />

      <div className="grid md:grid-cols-2 gap-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
          <WeatherCard />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
          <NewsSection />
        </section>
      </div>
    </div>
  );
}
