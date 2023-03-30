import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import UI from './src/Enterpoint';
import './src/locales/i18n';
import {configureAppStore} from './src/services/store';

const {store} = configureAppStore();

export default function Entrypoint() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#EFEFEF" barStyle="light-content" />
      <Provider store={store}>
        <UI />
      </Provider>
    </SafeAreaView>
  );
}
