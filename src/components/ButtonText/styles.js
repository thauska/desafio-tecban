import styled from 'styled-components/native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: ${(prop) => prop.backgroundColor || colors.buttonBackground};
  border-radius: 20px;
`;

export const Text = styled.Text`
  font-size: 18px;
  padding: 13px;
  color: ${(prop) => prop.textColor || colors.textLight};
  text-align: center;
  width: 100%;
  font-family: 'Poppins';
`;

export const Icon = styled(IconMaterial)`
  color: ${(prop) => prop.textColor || colors.textLight};
  font-size: 18px;
  margin-left: 16px;
`;