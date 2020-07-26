import React from 'react';
import {Container as MainContainer} from '~/styles';
import {bicoDone} from '~/services/api';
import {Container, Title, Description, Circle, Icon} from './styles';
import {navigate} from '~/services/navigator';
import ButtonText from '~/components/ButtonText'

const BicoPayDone = () => {
  const loadApi = () => {
    // donePay('22d2d333d2-5a47-40ff-8419-10a5fd379d07')
  }

  React.useEffect(loadApi, []);

  return (
    <MainContainer>
      <Container>
          <Circle>
            <Icon name='check-bold' />
          </Circle>
          <Title>BICO SOLICITADO!</Title>
          <Description>Pagamento efetuado!</Description>
          <ButtonText text='Entendi' onPress={() => {navigate('BicoList')}} backgroundColor='#D9483B' />
      </Container>
    </MainContainer>
  );
};

BicoPayDone.propTypes = {};

export default BicoPayDone;
