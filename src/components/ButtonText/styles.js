import styled from 'styled-components/native';
import {colors} from '~/styles';

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: ${(prop) => prop.backgroundColor || colors.buttonBackground};
  border-radius: 8px;
`;

export const Text = styled.Text`
  font-size: 18px;
  padding: 12.5px;
  color: ${colors.buttonText};
  text-align: center;
  width: 100%;
  font-family: 'Roboto';
`;
