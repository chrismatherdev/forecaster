import { ColorModeScript } from '@chakra-ui/color-mode';
import { ChakraProvider } from '@chakra-ui/provider';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { ForecastProvider } from './hooks';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ForecastProvider>
        <ColorModeScript />
        <App />
      </ForecastProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
