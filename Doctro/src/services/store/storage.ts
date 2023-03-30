import AsyncStorage from '@react-native-community/async-storage';

import {dbKey} from '../../../app.json';

export default {
  load() {
    return AsyncStorage.getItem(dbKey).then(
      jsonState => JSON.parse(jsonState) || {},
    );
  },

  save(state) {
    if (!state) {
      return;
    }
    const jsonState = JSON.stringify(state);
    return AsyncStorage.setItem(dbKey, jsonState);
  },
};
