import React from "react";

import {navigate} from '~/services/navigator'

import {
  Container,
  Input,
  Text,
  TextSecundary,
  TextInput,
  FormContainer,
  Button,
  ButtonText,
} from "./styles";

const RequestCredit = () => {
  const [amount, onChangeText] = React.useState('')

  return (
    <Container>
      <Text>O BICOS te auxilia com microcrédito para os seus serviçõs:</Text>

      <FormContainer>
        <Text>De quanto você precisa?</Text>
        <Input onChangeText={onChangeText}></Input>
        <Text>Quando?</Text>
        <Input></Input>
        <Text>Justifique a sua solicitação de crédito</Text>
        <TextSecundary>
          Sua justificativa é essencial para a solicitação ser aceita
        </TextSecundary>
        <TextInput></TextInput>

        <Button>
          <ButtonText onPress={() => {navigate('CreditDone', {amount})}}>Solicitar Microcrédito</ButtonText>
        </Button>
      </FormContainer>
    </Container>
  );
};

export default RequestCredit;
