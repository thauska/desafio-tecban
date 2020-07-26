import styled from "styled-components/native";
import { colors } from "~/styles";

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.Text`
  margin-right: 7px;
  color: #707070;
  font-size: 18px;
  font-family: 'Poppins';
`;

export const Photo = styled.Image`
  width: 274px;
  height: 276px;
  margin-top: -29px;
`;