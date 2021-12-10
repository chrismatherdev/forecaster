import { Box, Flex, Icon as IconWrapper, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

type HighlightProps = {
  title: string;
  value: string;
  icon: React.ElementType;
};

function Highlight({ title, value, icon }: HighlightProps) {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={5}
      shadow="xl"
      bg={useColorModeValue('white', 'transparent')}
      borderWidth="1px"
      borderColor={useColorModeValue('white', 'gray.700')}
      rounded="lg"
    >
      <Flex justifyContent="space-between">
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight="medium" isTruncated>
            {title}
          </StatLabel>

          <StatNumber fontSize="2xl" fontWeight="medium">
            {value}
          </StatNumber>
        </Box>

        <IconWrapper my="auto" as={icon} w={8} h={8} />
      </Flex>
    </Stat>
  );
}

export default Highlight;
