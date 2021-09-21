import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from './store';
import * as theme from './theme';

// @ts-ignore
import Routes from 'src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          <Routes />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
