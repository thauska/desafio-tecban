import styled from "styled-components/native";
import { colors, ScrollContainer as ScrollContainerComponent } from "~/styles";

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ScrollContainer = styled(ScrollContainerComponent).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
})`
  padding-left: 30px;
  padding-right: 30px;
`;

export const Title = styled.Text`
  font-family: "Roboto";
  font-size: 25px;
  font-weight: 500;
  color: ${colors.colorBlue};
`;

export const Description = styled.Text`
  /* font-family: "Roboto"; */
  text-align: center;
  font-size: 12px;
  margin: 10px 0px;
  font-weight: 500;
  color: ${colors.textDark};
`;

export const Image = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
`;


