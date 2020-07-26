import React from "react";
import { Container as MainContainer } from "~/styles";
import ButtonText from "~/components/ButtonText";
import { navigate } from "~/services/navigator";

import {
  Container,
  ScrollContainer,
  Title,
  Description,
  Image,
} from "./styles";

import man2 from "~/assets/img/man2.png";
import peopleTaking from "~/assets/img/peopleTaking.png";

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <ScrollContainer>
          <Title>Registre-se no Bicos</Title>

          <Image source={man2} />
          <Description>
            Para quem quer conseguir mais serviços toque nesse botão
          </Description>
          <ButtonText
            icon="arrow-right"
            text="Sou prestador"
            onPress={() => {
              navigate("SelectBank", { type: "admin" });
            }}
            backgroundColor="#D9483B"
          />
          <Image source={peopleTaking} />
          <Description>
            Se você está procurando um prestados de serviços toque nesse botão
          </Description>
          <ButtonText
            icon="arrow-right"
            text="Sou Cliente"
            backgroundColor="#5BD9D9"
            onPress={() => {
              navigate("SelectBank", { type: "bico" });
            }}
          />
        </ScrollContainer>
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {};

export default Main;
