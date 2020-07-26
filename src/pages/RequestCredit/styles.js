import styled from "styled-components/native";
import { colors } from "~/styles";

export const Container = styled.View`
  background: ${colors.background};
  padding-left: 30px;
  padding-right: 30px;
`;

export const FormContainer = styled.View`
  padding: 20px 0px;
`;

export const Text = styled.Text`
  color: ${colors.textGrey};
  font-size: 18px;
  margin-top: 10px;
`;
export const TextSecundary = styled.Text`
  color: ${colors.textGrey};
  font-size: 10px;
`;

export const Input = styled.TextInput`

  padding: 0px;
  width: 225px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.colorRed};
`;

export const TextInput = styled.TextInput`
  background: #fff;
  border: 2px ${colors.colorRed};
  height: 188px;
  border-radius: 6px;
  margin-top: 9px;
`;

export const Button = styled.TouchableOpacity`
  margin:15px;
  align-items: center;
  justify-content: center;
  background: ${colors.colorRed};
  box-shadow: 3px 3px 6px #00000029;
  height: 51px;
  border-radius: 39px;
`;

export const ButtonText = styled.Text`
  color: ${colors.textWhite};
  font-size: 16px;
`;
