import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// PAGES
import Main from '~/pages/Main';
import Login from '~/pages/Login';
import BicosList from '~/pages/BicosList';
import BicoInfo from '~/pages/BicoInfo';
import SelectBank from '~/pages/SelectBank';
import PeddingBicosList from '~/pages/PeddingBicosList';
import BicoDone from '~/pages/BicoDone'
import HomePrestador from '~/pages/HomePrestador'
import RequestCredit from '~/pages/RequestCredit'
import CreditDone from '~/pages/CreditDone'
import QRCode from '~/pages/QRCode'
import WithdrawMoney from '~/pages/WithdrawMoney'

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
  {
    path: 'BicosList',
    title: 'Lista de bicos',
    screen: BicosList
  },
  {
    path: 'BicoInfo',
    title: 'Informação do Bico',
    screen: BicoInfo
  },
  {
    path: 'SelectBank',
    title: 'SelectBank',
    screen: SelectBank
  }, 
  {
    path: 'PeddingBicosList',
    title: 'PeddingBicosList',
    screen: PeddingBicosList
  },
  {
    path: 'BicoDone',
    title: 'BicoDone',
    screen: BicoDone
  },
  {
    path: 'HomePrestador',
    title: 'HomePrestador',
    screen: HomePrestador
  },
  {
    path: 'RequestCredit',
    title: 'RequestCredit',
    screen: RequestCredit
  },
  {
    path: 'CreditDone',
    title: 'CreditDone',
    screen: CreditDone
  },
  {
    path: 'QRCode',
    title: 'QRCode',
    screen: QRCode
  },
  {
    path: 'WithdrawMoney',
    title: 'WithdrawMoney',
    screen: WithdrawMoney
  }
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
    <Stack.Navigator initialRouteName="main" >{renderRoutes()}</Stack.Navigator>
  );
}
