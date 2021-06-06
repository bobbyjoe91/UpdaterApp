/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
// import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainMenu from './src/screens/MainMenu';
import UpdateMenu from './src/screens/UpdateMenu';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 80,
          paddingBottom: 15,
          activeTintColor: 'orange',
          inactiveTintColor: 'gray',
        }
      }}
    >
      <Tab.Screen name="Main" component={MainMenu}/>
      <Tab.Screen name="Update" component={UpdateMenu}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
};

export default App;
