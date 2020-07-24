import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container as MainContainer} from '~/styles';

import {Container, ScrollContainer, Title, Description} from './styles';

const Main = () => {
  const navigation = useNavigation();

  return (
    <MainContainer>
      <Container>
        <ScrollContainer>
          <Title>Bem-vindo</Title>
          <Description>Ao aplicativo em React Native</Description>
        </ScrollContainer>
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {};

export default Main;
