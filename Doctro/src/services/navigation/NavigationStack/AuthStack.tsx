import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../../features/auth/containers/login';
import SignUpScreen from 'features/auth/containers/signup';
import TabNavigation from './TabNavigation';
import LanguageScreen from 'features/languagescreen';
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
