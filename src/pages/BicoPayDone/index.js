import React from 'react';
import {Container as MainContainer} from '~/styles';
import {bicoDone} from '~/services/api';
import {Container, Title, Description, Circle, Icon} from './styles';
import {useNavigation} from '@react-navigation/native';
import ButtonText from '~/components/ButtonText'

const BicoPayDone = () => {
  const navigation = useNavigation();

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
          <ButtonText text='Entendi' onPress={() => {navigation.replace('BicoList')}} backgroundColor='#D9483B' />
      </Container>
    </MainContainer>
  );
};

BicoPayDone.propTypes = {};

export default BicoPayDone;
