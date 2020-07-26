import React from 'react';
import {Container as MainContainer} from '~/styles';
import {bicoDone} from '~/services/api';
import {Container, Title, Description, Circle, Icon} from './styles';
import {navigate} from '~/services/navigator';
import ButtonText from '~/components/ButtonText'
import {useNavigation} from '@react-navigation/native';

const BicoDone = ({route}) => {
  const navigation = useNavigation();

  const loadApi = () => {
    bicoDone(route.params.id)
  }

  React.useEffect(loadApi, []);

  return (
    <MainContainer>
      <Container>
          <Circle>
            <Icon name='check-bold' />
          </Circle>
          <Title>BICO REALIZADO!</Title>
          <Description>O Cliente já efetuou o pagamento! Em breve o pagamento será depositado no seu saldo!</Description>
          <ButtonText text='Entendi' onPress={() => {navigation.replace('PeddingBicosList')}} backgroundColor='#D9483B' />
      </Container>
    </MainContainer>
  );
};

BicoDone.propTypes = {};

export default BicoDone;
