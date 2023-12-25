import React, { useMemo } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { NAVIGATION_KEYS, TRootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/splash/Splash';
import LoginScreen from '../screens/auth/login/Login';
import RegisterScreen from '../screens/auth/register/Register';
import Home from '../screens/home/Home';

const Stack = createStackNavigator<TRootStackParamList>();

const screenOptions = (): StackNavigationOptions => {
  return {
    cardStyle: { backgroundColor: 'transparent' },
    headerShown: false,
  };
};

const RootNavigator = () => {
  const screens = useMemo(
    () => (
      <>
        <Stack.Screen
          name={NAVIGATION_KEYS.SPLASH}
          component={SplashScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name={NAVIGATION_KEYS.LOGIN}
          component={LoginScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name={NAVIGATION_KEYS.REGISTER}
          component={RegisterScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name={NAVIGATION_KEYS.HOME}
          component={Home}
          options={screenOptions}
        />
      </>
    ),
    [],
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={NAVIGATION_KEYS.SPLASH}>
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
