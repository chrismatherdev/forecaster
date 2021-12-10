import { useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      size="md"
      alignSelf="flex-end"
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
    />
  );
}

export default ThemeToggle;
