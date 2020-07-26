import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';


export const Card = styled.View.attrs({
  elevation: 1.5,
})`
  background: #FFF;
  width: 100%;
  border-radius: 32px;
  margin-top: 15px;
  margin-left: 9px;
  margin-right: 9px;
  padding-bottom: 22px;
  flex-direction: column;
  align-items: center;
  padding-right: 34px;
  padding-left: 34px;
`;


export const DescriptionView = styled.View`
  padding-top: 16px;
  margin-bottom: 4px;
  flex-direction: row;
`;

export const Title = styled.Text`
  flex: 1;
  margin-right: 7px;
  color: #707070;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #707070;
  font-size: 14px;
  font-family: 'Poppins';
`;

export const InfoView = styled.View`
  flex: 1;
  margin-top: 8px;
  margin-bottom: 20px;
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
  margin-right: 7px;
  color: #707070;
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: bold;
  text-align: right;
`;