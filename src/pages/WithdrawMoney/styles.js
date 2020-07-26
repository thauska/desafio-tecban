import styled from "styled-components/native";

import { ScrollContainer as ScrollComponent, colors } from "~/styles";

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  /* align-items: center; */
  /* justify-content: center; */
  overflow: hidden;
`;

export const ScrollContainer = styled(ScrollComponent).attrs({
  flexGrow: 1,
})`
  padding-left: 30px;
  padding-right: 30px;
`;

export const Text = styled.Text`
  color: ${colors.textGrey};
  font-size: 18px;
  margin-top: 10px;
`;

export const TextInput = styled.Text`
  color: ${colors.textGrey};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const Input = styled.TextInput`
  padding: 0px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.colorRed};
  font-size: 50px;
  text-align: center;
`;

export const InputContainer = styled.View`
  margin-top: 170px;
`;

export const SubmitButton = styled.TouchableOpacity`
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background: ${colors.colorRed};
  box-shadow: 3px 3px 6px #00000029;
  height: 51px;
  border-radius: 39px;
  flex-direction: row;
  margin: 20px;
`;

export const SubmitButtonText = styled.Text`
  color: ${colors.textWhite};
  font-size: 16px;
`;
