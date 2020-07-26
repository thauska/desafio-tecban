import React from 'react';
import {Container as MainContainer} from '~/styles';
import ButtonText from '~/components/ButtonText'
import {navigate} from '~/services/navigator'
 
import {Container, ScrollContainer, Title, Description} from './styles';

const SelectBank = ({route}) => {
  return (
    <MainContainer>
      <Container>
        <ScrollContainer>
          <Title>Qual seu banco?</Title>
          <Description>Selecione o seu banco.</Description>

          <ButtonText text='Banco 01' onPress={() => {navigate('Login', {type: route.params.type, bank: '1'})}} style={{marginBottom: 5}} backgroundColor='#F2B84B' />

          <ButtonText text='Banco 02' backgroundColor='#F2B84B' onPress={() => {navigate('Login', {type: route.params.type, bank: '2'})}} />
        </ScrollContainer>
      </Container>
    </MainContainer>
  );
};

SelectBank.propTypes = {};

export default SelectBank;
