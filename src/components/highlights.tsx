import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import { FaCloud, FaCloudSun, FaWater, FaWind } from 'react-icons/all';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useForecast } from '../hooks';
import { getFormattedTime } from '../utils/time';
import Highlight from './highlight';

function Highlights() {
  const { selectedForecast } = useForecast();

  // Hook handles loading screen via the provider
  if (!selectedForecast) {
    return <></>;
  }

  return (
    <Box>
      <Heading fontWeight="bold" mb={4}>
        Forecast Highlights
      </Heading>

      <Grid templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4} width="100%">
        <Highlight title="Cloudiness" value={`${selectedForecast.clouds}%`} icon={FaCloud} />

        <Highlight title="Humidity" value={`${selectedForecast.humidity}%`} icon={FaWater} />

        <Highlight title="UV Index" value={selectedForecast.uvi.toString()} icon={FaCloudSun} />

        <Highlight title="Sunrise" value={getFormattedTime(selectedForecast.sunrise)} icon={FaSun} />

        <Highlight title="Sunset" value={getFormattedTime(selectedForecast.sunset)} icon={FaMoon} />

        <Highlight title="Wind Speed" value={selectedForecast.windSpeed.toString()} icon={FaWind} />
      </Grid>
    </Box>
  );
}

export default Highlights;
