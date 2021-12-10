import { Center, Spinner, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function Loader() {
  return (
    <Center flex={1}>
      <Spinner size="xl" color={useColorModeValue('gray.900', 'white')} speed="0.5s" />
    </Center>
  );
}

export default Loader;
