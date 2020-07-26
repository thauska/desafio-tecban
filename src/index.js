import React from 'react';
import 'react-native-url-polyfill/auto';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/routes';
import {navigationRef} from '~/services/navigator';
import {StatusBar} from '~/styles';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);

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
