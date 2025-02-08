import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cloud,
  Droplets,
  ThermometerSun,
  Wind,
  AlertTriangle,
} from "lucide-react";
import { WeatherCard } from "@/components/weather/weather-card";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <ThermometerSun className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28°C</div>
            <p className="text-xs text-muted-foreground">
              +2° from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humidity</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">
              Normal range
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
            <Wind className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 km/h</div>
            <p className="text-xs text-muted-foreground">
              North-East
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cloud Cover</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45%</div>
            <p className="text-xs text-muted-foreground">
              Partly cloudy
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Weather</CardTitle>
          </CardHeader>
          <CardContent>
            <WeatherCard />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <div>
                  <h4 className="font-medium">Heavy Rain Warning</h4>
                  <p className="text-sm text-muted-foreground">
                    Expected in the next 6 hours
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <div>
                  <h4 className="font-medium">High Wind Alert</h4>
                  <p className="text-sm text-muted-foreground">
                    Wind speeds up to 60 km/h
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
