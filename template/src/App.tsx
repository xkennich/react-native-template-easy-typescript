import React, {useCallback, useEffect} from 'react';
import messaging, {firebase} from '@react-native-firebase/messaging';
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
  const syncCode = useCodePush();
  useEffect(() => {
    syncCode()
  }, [])

  // const checkPermission = useCallback(async () => {
  //   const enable = await firebase.messaging().hasPermission();
  //   if (enable === messaging.AuthorizationStatus.NOT_DETERMINED) {
  //     await firebase.messaging().requestPermission({
  //       sound: true,
  //       announcement: true,
  //       badge: true,
  //       alert: true,
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   checkPermission();
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     if (remoteMessage?.data) {
  //       setTimeout(() => pushNotification(remoteMessage.data), 100);
  //     }
  //   });
  //
  //   messaging().onNotificationOpenedApp(async remoteMessage => {
  //     if (remoteMessage?.data) {
  //       setTimeout(() => pushNotification(remoteMessage.data), 100);
  //     }
  //   });
  //
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage?.data) {
  //         setTimeout(() => pushNotification(remoteMessage.data), 100);
  //       }
  //     });
  // }, [checkPermission]);
  // TODO: расскомментить когда будут необходимые роуты и типы роутов для пушей

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
