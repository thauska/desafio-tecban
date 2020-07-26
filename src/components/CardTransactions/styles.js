import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';


export const Card = styled.View.attrs({
  elevation: 1.5,
})`
  background: #FFF;
  border-radius: 32px;
  margin-top: 20px;
  margin-left: 11px;
  margin-right: 11px;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;


export const DescriptionView = styled.View`
  margin-left: 24px;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.Text`
  margin-right: 7px;
  color: #707070;
  font-size: 18px;
  margin-bottom: 4px;
  font-family: 'Poppins';
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #707070;
  font-size: 14px;
  font-family: 'Poppins';
`;

export const InfoView = styled.View`
  flex: 0.6;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`

export const Date = styled.Text`
  color: #707070;
  font-size: 16px;
  font-family: 'Poppins';
`;

export const Valor = styled.Text`
  flex: 1;
  margin-right: 15px;
  color: ${(prop) => prop.isPositive ? '#0ECE07' : '#F24141'};;
  font-size: 20px;
  font-family: 'Poppins';
  font-weight: bold;
  text-align: right;
`;