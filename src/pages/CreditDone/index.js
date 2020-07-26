import React from 'react';
import {Container as MainContainer} from '~/styles';
import {creditDone} from '~/services/api';
import {Container, Title, Description, Circle, Icon} from './styles';
import {navigate} from '~/services/navigator';
import ButtonText from '~/components/ButtonText'

const CreditDone = ({route}) => {
  console.log(route.params)
  const loadApi = () => {
    creditDone('7e7ff095-5a47-40ff-8419-10a5fd379d07', route.params.amount)
  }

  React.useEffect(loadApi, []);

  return (
    <MainContainer>
      <Container>
          <Circle>
            <Icon name='check-bold' />
          </Circle>
          <Title>Parabéns, sua solicitação foi aceita!</Title>
          <Description>Você tem até 20/09/2020 para efetuar o pagamento com taxas de juros reduzidas!</Description>
          <ButtonText text='Entendi' onPress={() => {navigate('HomePrestador')}} backgroundColor='#D9483B' />
      </Container>
    </MainContainer>
  );
};

CreditDone.propTypes = {};

export default CreditDone;
