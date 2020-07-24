import React from 'react';
import {Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/routes';
import {navigationRef} from '~/services/navigator';
import {StatusBar} from '~/styles';

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
