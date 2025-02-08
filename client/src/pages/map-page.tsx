import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    // Add some sample weather markers
    L.marker([40.7128, -74.006]).addTo(mapRef.current)
      .bindPopup("New York: 22°C, Partly Cloudy");
    L.marker([51.5074, -0.1278]).addTo(mapRef.current)
      .bindPopup("London: 18°C, Light Rain");
    L.marker([35.6762, 139.6503]).addTo(mapRef.current)
      .bindPopup("Tokyo: 25°C, Clear");

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-4">
        <div ref={mapContainerRef} className="h-[600px] w-full" />
      </Card>
    </div>
  );
}
