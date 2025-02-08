import { Sun, Cloud, CloudRain, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  windy: Wind,
};

export function WeatherCard() {
  const currentWeather = {
    temperature: 28,
    condition: "cloudy" as keyof typeof weatherIcons,
    humidity: 65,
    windSpeed: 12,
    precipitation: 30,
  };

  const WeatherIcon = weatherIcons[currentWeather.condition];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <WeatherIcon className="h-12 w-12 text-primary" />
            <div>
              <h3 className="text-3xl font-bold">{currentWeather.temperature}°C</h3>
              <p className="text-muted-foreground capitalize">
                {currentWeather.condition}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Humidity</span>
              <span className="text-sm text-muted-foreground">
                {currentWeather.humidity}%
              </span>
            </div>
            <Progress value={currentWeather.humidity} />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Wind Speed</span>
              <span className="text-sm text-muted-foreground">
                {currentWeather.windSpeed} km/h
              </span>
            </div>
            <Progress value={(currentWeather.windSpeed / 50) * 100} />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Precipitation</span>
              <span className="text-sm text-muted-foreground">
                {currentWeather.precipitation}%
              </span>
            </div>
            <Progress value={currentWeather.precipitation} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
