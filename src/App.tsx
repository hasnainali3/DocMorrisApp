import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {useBrandStore} from './store/brandStore';
import {AppNavigator} from './navigation';

const App = () => {
  const theme = useBrandStore(state => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
