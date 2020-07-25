import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// PAGES
import Main from '~/pages/Main';
import Login from '~/pages/Login';

const paths = [
  {
    path: 'Main',
    title: 'Principal',
    screen: Main,
  },
  {
    path: 'Login',
    title: 'Login',
    screen: Login,
  },
];

export default function Routes() {
  const Stack = createStackNavigator();

  const renderRoutes = () => {
    return paths.map((item) => {
      return (
        <Stack.Screen
          key={item.path}
          name={item.path}
          component={item.screen}
          options={{
            title: item.title,
            headerShown: false,
          }}
        />
      );
    });
  };

  return (
    <Stack.Navigator initialRouteName="Main">{renderRoutes()}</Stack.Navigator>
  );
}
