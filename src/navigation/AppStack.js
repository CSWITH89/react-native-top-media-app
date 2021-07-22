import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, Details, Player} from '../screens';

const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
  return (
    <Navigator
      initialRouteName="Dashboard"
      // screenOptions={{headerShown: false}}>
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Discover'}}></Screen>
      <Screen name="Details" component={Details}></Screen>
      <Screen name="Player" component={Player}></Screen>
    </Navigator>
  );
};

export default AppStack;
