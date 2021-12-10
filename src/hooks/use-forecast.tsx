import React, { createContext, useContext, useEffect, useState } from 'react';

type DailyForecast = Array<{
  date: Date;
  dayIndex: number;
  sunrise: Date;
  sunset: Date;
  temperature: {
    minTemperature: number;
    maxTemperature: number;
  };
  pressure: number;
  humidity: number;
  windSpeed: number;
  windDirectionDegrees: number;
  weather: [
    {
      dailyWeatherIcon: string;
    },
  ];
  clouds: number;
  uvi: number;
}>;

function useProvideForecast() {
  const [location, setLocation] = useState({
    name: 'London, SW1A 2DR, United Kingdom',
    longitude: -0.118092,
    latitude: 51.509865,
  });

  const [dailyForecast, setDailyForecast] = useState<DailyForecast>([]);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchForecastData() {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${
            location.longitude
          }&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY}&exclude=current,minutely,hourly`,
          { method: 'GET' },
        );

        const { daily } = await response.json();

        setSelectedDay(new Date(daily[0].dt * 1000).getDay());

        setDailyForecast(
          daily.slice(0, 7).map((day: any) => ({
            date: new Date(day.dt * 1000),
            dayIndex: new Date(day.dt * 1000).getDay(),
            sunrise: new Date(day.sunrise * 1000),
            sunset: new Date(day.sunset * 1000),
            temperature: {
              minTemperature: day.temp.min,
              maxTemperature: day.temp.max,
            },
            humidity: day.humidity,
            windSpeed: day.wind_speed,
            windDirectionDegrees: day.wind_deg,
            weather: day.weather.map((weatherItem: any) => ({
              dailyWeatherIcon: weatherItem.icon,
            })),
            clouds: day.clouds,
            uvi: day.uvi,
          })),
        );
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    })();
  }, [location]);

  return {
    dailyForecast,
    selectedForecast: dailyForecast.find((forecast) => forecast.dayIndex === selectedDay),
    selectedDay,
    setSelectedDay,
    setLocation,
    location,
    loading,
  };
}

const ForecastContext = createContext<ReturnType<typeof useProvideForecast> | null>(null);

export function ForecastProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const forecast = useProvideForecast();

  return <ForecastContext.Provider value={forecast}>{children}</ForecastContext.Provider>;
}

export function useForecast() {
  const forecast = useContext(ForecastContext);

  if (!forecast) {
    throw new Error('useForecast must be wrapped in a ForecastProvider');
  }

  return forecast;
}
