import React from "react";

import {
  Container,
  ScrollContainer,
  Text,
  InputContainer,
  TextInput,
  Input,
  SubmitButton,
  SubmitButtonText,
} from "./styles";

const WithdrawMoney = () => {
  const [money, setMoney] = React.useState("");
  return (
    <Container>
      <ScrollContainer>
        <Text>
          No BICOS você pode sacar seu dinheiro de forma rápida e prática
        </Text>
        <InputContainer>
          <TextInput>Quanto você deseja sacar?</TextInput>
          <Input
            value={money}
            onChangeText={(text) => {
              setMoney(text);
            }}
          ></Input>
        </InputContainer>
      </ScrollContainer>
      <SubmitButton>
        <SubmitButtonText>PRÓXIMO</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default WithdrawMoney;
