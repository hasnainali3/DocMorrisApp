import React, {ReactElement} from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {docMorrisTheme} from './src/theme/themes';

const render = (ui: ReactElement, options = {}) =>
  rtlRender(
    <ThemeProvider theme={docMorrisTheme}>
      <NavigationContainer>{ui}</NavigationContainer>
    </ThemeProvider>,
    options,
  );

export * from '@testing-library/react-native';
export {render};
