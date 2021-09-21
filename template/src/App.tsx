import React, { useEffect } from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import codePush from 'react-native-code-push';
import {useCodePush} from './hooks/useCodePush';
import store from './store';
import * as theme from './theme';

// @ts-ignore
import Routes from 'src/navigation';

const App = () => {
  const syncCode = useCodePush()
  useEffect(() => {
    syncCode()
  }, [])

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

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
};

export default codePush(codePushOptions)(App);
