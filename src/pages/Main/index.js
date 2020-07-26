import React from 'react';
import {Container as MainContainer} from '~/styles';
import ButtonText from '~/components/ButtonText'
import {navigate} from '~/services/navigator'
 
import {Container, ScrollContainer, Title, Description} from './styles';
import Header from '~/components/Header'

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <ScrollContainer>
          <Title>Bem-vindo</Title>
          <Description>Ao BICO, seu companheiro de trabalho.</Description>

          <ButtonText text='Quero encontrar bicos' onPress={() => {navigate('SelectBank', {type: 'bico'})}} style={{marginBottom: 5}} backgroundColor='#5BD9D9' />

          <ButtonText text='Quero realizar bicos' backgroundColor='#D9483B' onPress={() => {navigate('SelectBank', {type: 'admin'})}} />
        </ScrollContainer>
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {};

export default Main;
