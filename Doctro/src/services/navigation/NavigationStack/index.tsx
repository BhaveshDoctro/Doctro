import {NavigationContainer} from '@react-navigation/native';
import {authSaga} from 'features/auth/containers/login/redux/authSaga';
import {
  reducer,
  sliceKey,
} from 'features/auth/containers/login/redux/authSlice';
import * as React from 'react';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import {navigationRef} from '../NavigationService';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';
function AppNavigation() {
  useInjectReducer({key: sliceKey, reducer: reducer});
  useInjectSaga({key: sliceKey, saga: authSaga});

  const isSignedIn = false;

  return (
    <NavigationContainer ref={navigationRef}>
      {isSignedIn ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}
export default AppNavigation;
