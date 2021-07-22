import React from 'react';
import MainNav from './src/navigation/MainNav';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNav></MainNav>
    </NavigationContainer>
  );
};

export default App;
