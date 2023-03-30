import AsyncStorage from '@react-native-community/async-storage';

const getFromStorage = async (key: any) => await AsyncStorage.getItem(key);

const saveToStorage = async (key: any, value: any) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    __DEV__ && console.log('err async', error);
  }
  return null;
};

const storage = {
  get: (key: string) => getFromStorage(key),
  set: (key: string, value: any) => saveToStorage(key, value),
};

export default storage;
