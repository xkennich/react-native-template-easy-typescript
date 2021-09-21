import {STORAGE_PREV} from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getData<T>(dataName: string): Promise<T> {
  return new Promise(resolve => {
    AsyncStorage.getItem(STORAGE_PREV + dataName).then(jsonData => {
      if (!jsonData) {
        resolve(undefined);
      }
      if (typeof jsonData === 'string') {
        resolve(JSON.parse(jsonData));
      }
    });
  });
}

function setData(dataName: string, data: any): Promise<void> {
  return AsyncStorage.setItem(STORAGE_PREV + dataName, JSON.stringify(data));
}

function deleteItem(dataName: string): Promise<void> {
  return AsyncStorage.removeItem(STORAGE_PREV + dataName);
}
