import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import * as React from 'react';
import {Image, Text, View} from 'react-native';
import HomeScreen from 'features/home';
import ProjectScreen from 'features/project';
import images from '../../../images/image_map';
import colors from 'shared/theme/colors';
import styles from 'shared/theme/styles';

const Tab = createBottomTabNavigator();

export default function TabNavigation({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primaryColor,
      }}>
      <Tab.Screen
        name={'Dashboard'}
        component={HomeScreen}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Tasks') {
              return {display: 'none'};
            }
            return {position: 'absolute'};
          })(route),
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                top: 5, // space from bottombar
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={!focused ? images.home : images.homeActive}
                style={styles.smallFieldIcon}
              />
              <Text
                style={
                  !focused
                    ? styles.in_active_tab_label
                    : styles.active_tab_label
                }>
                Home
              </Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name={'ProjectsNew'}
        component={ProjectScreen}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Search') {
              return {display: 'none'};
            }
            return {position: 'absolute'};
          })(route),
          headerShown: false,
          tabBarLabel: '',
          // unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                top: 5, // space from bottombar
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={!focused ? images.projects : images.projectsActive}
                style={styles.smallFieldIcon}
              />
              <Text
                style={
                  !focused
                    ? styles.in_active_tab_label
                    : styles.active_tab_label
                }>
                Project
              </Text>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
