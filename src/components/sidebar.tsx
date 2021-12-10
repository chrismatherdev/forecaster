import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import AddressAutocomplete from './address-autocomplete';

function Sidebar() {
  return (
    <Box borderRightWidth="1px" borderColor={useColorModeValue('gray.300', 'gray.700')}>
      <Box position="sticky" top={0} p={4} display="flex" flexDirection="column" zIndex={1}>
        <AddressAutocomplete />
      </Box>
    </Box>
  );
}

export default Sidebar;
