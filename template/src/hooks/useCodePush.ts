import {useCallback} from 'react';
import codePush from 'react-native-code-push';
import {CODE_PUSH_KEY} from 'react-native-dotenv';

export const useCodePush = () => {
  return useCallback(() => {
    codePush.sync({
      deploymentKey: CODE_PUSH_KEY,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, [])
}
