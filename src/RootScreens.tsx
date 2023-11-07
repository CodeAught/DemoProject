import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createNativeStackNavigator();

const RootScreens = () => {
  return (
    <Stack.Navigator initialRouteName="ScreenA">
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
};

export default RootScreens;
