import React from 'react';
import {Container as MainContainer} from '~/styles';

import {Container, ScrollContainer, Title, Description} from './styles';

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <ScrollContainer>
          <Title>Bem-vindo</Title>
          <Description>Ao BICOS, seu companheiro de trabalho.</Description>
        </ScrollContainer>
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {};

export default Main;
