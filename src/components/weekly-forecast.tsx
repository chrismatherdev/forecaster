import { Grid, Image, Stat, StatLabel, StatNumber, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { useForecast } from '../hooks';
import Box from './box';

export function getWeekday(date: Date) {
  switch (date.getDay()) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
}

function WeeklyForecast() {
  const { dailyForecast, selectedDay, setSelectedDay } = useForecast();
  const selectedBackground = useColorModeValue('gray.900', 'white');
  const selectedColor = useColorModeValue('white', 'gray.900');

  return (
    <Grid>
      <Grid
        width="100%"
        templateColumns="repeat(7, 1fr)"
        gridGap={4}
        overflowX={{ sm: 'scroll', md: 'scroll', lg: 'inherit' }}
      >
        {dailyForecast.map((day) => (
          <Box
            key={day.dayIndex}
            onClick={() => setSelectedDay(day.dayIndex)}
            cursor="pointer"
            minW={{ sm: '125px', md: 'inherit' }}
            {...(day.dayIndex === selectedDay && {
              bg: selectedBackground,
              borderColor: selectedBackground,
              color: selectedColor,
            })}
          >
            <Text fontSize="medium" textAlign="center" fontWeight="bold">
              {getWeekday(day.date)}
            </Text>

            <Image
              src={`http://openweathermap.org/img/wn/${day.weather[0].dailyWeatherIcon}@2x.png`}
              alt="daily weather icon"
            />

            <Stat textAlign="center">
              <StatLabel>Min / Max</StatLabel>

              <StatNumber fontSize="sm" fontWeight="bold">
                {day.temperature.minTemperature}° - {day.temperature.maxTemperature}°
              </StatNumber>
            </Stat>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}

export default WeeklyForecast;
