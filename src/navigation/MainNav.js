import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppStack from './AppStack';

const {Navigator, Screen} = createStackNavigator();

const MainNav = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="AppStack" component={AppStack}></Screen>
    </Navigator>
  );
};

export default MainNav;
