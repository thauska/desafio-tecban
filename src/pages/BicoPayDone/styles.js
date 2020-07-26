import styled from 'styled-components/native';
import {colors} from '~/styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  margin-right: 42px;
  margin-left: 42px;
  background: #F1F1F1;
`;

export const Title = styled.Text`
  color: #707070;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${colors.textDark};
  text-align: center;
`;

export const Description = styled.Text`
  color: #707070;
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 21px;
  font-weight: 500;
  text-align: center;
  color: ${colors.textDark};
`;

export const Circle = styled.View`
  background: #D9483B;
  width: 269px;
  height: 269px;
  border-radius: 269px;
  margin-bottom: 39px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled(IconMaterial)`
  color: ${(prop) => prop.textColor || colors.textLight};
  font-size: 124px;
`;