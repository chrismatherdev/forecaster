import { BoxProps, Box as ChakraBox, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function Box(props: BoxProps) {
  return (
    <ChakraBox
      p={2}
      borderRadius="10px"
      shadow="xl"
      bg={useColorModeValue('white', 'transparent')}
      border="1px solid"
      borderColor={useColorModeValue('white', 'gray.700')}
      rounded="lg"
      boxShadow="none"
      {...props}
    />
  );
}

export default Box;
