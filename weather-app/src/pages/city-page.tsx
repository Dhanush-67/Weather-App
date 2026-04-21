import { useParams, useSearchParams } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useForecastQuery, useWeatherQuery } from "@/hooks/use-weather";
import WeatherSkeleton from "@/components/loading-skeleton";
import CurrentWeather from "@/components/current-weather";

const CityPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();

  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive" className="max-w-md">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data, try again.</p>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
    return <WeatherSkeleton />;
  }

  return (
    <div>
      <div className="space-y-4">
        {/*Favorite Cities*/}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            {params.cityName}
          </h1>
        </div>

        <div className="grid gap-6">
          <div>
            <CurrentWeather data={weatherQuery.data} />
            {/*current weather*/}
            {/*hourly temp*/}
          </div>
          <div>
            {/*details*/}
            {/*forecast*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
