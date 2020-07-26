import React from "react";

import ButtonText from '~/components/ButtonText'

import {
  Container,
  Text,
  Photo
} from "./styles";

const QRCode = () => {
  const code = 'https://github.com/thauska/desafio-tecban'
  return (
    <Container>
      <Text>Certo! Agora você só precisa ir ao ATM mais próximo e scanear esse QRCODE</Text>
      <Photo source={{
          uri: 'https://www.qrtag.net/api/qr_6.png?url=' + code
      }} />
      <ButtonText text='Procurar Caixas Próximos' onPress={() => {}} backgroundColor='#D9483B' />
    </Container>
  );
};

export default QRCode;
