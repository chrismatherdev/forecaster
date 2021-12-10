import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Grid, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

import Highlights from './components/highlights';
import Loader from './components/loader';
import Sidebar from './components/sidebar';
import ThemeToggle from './components/theme-toggle';
import WeeklyForecast from './components/weekly-forecast';
import { useForecast } from './hooks';

function App() {
  const { colorMode } = useColorMode();
  const { loading, location } = useForecast();

  const formattedLocationName = location.name.includes(',')
    ? location.name.slice(0, location.name.indexOf(','))
    : location.name;

  return (
    <Grid templateColumns={{ lg: '1fr 3fr' }} backgroundColor={colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.50'}>
      <Sidebar />

      <VStack alignItems="initial" minH="100vh" p={4} spacing={{ sm: 6, md: 8, lg: 10 }}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box display="flex" justifyContent="space-between">
              <Heading>{formattedLocationName}</Heading>
              <ThemeToggle />
            </Box>
            <WeeklyForecast />
            <Highlights />
          </>
        )}
      </VStack>
    </Grid>
  );
}

export default App;
