import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';


export const Card = styled.TouchableOpacity.attrs({
  elevation: 1.5,
})`
  background: #FFF;
  flex: 1;
  width: 100%;
  border-radius: 32px;
  margin-top: 12px;
  margin-left: 6px;
  margin-right: 6px;
  padding: 15px;
  flex-direction: row;
  align-items: flex-start;
`;

export const Photo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 32px;
  margin-right: 15px;
`;

export const DescriptionView = styled.View`
  flex: 1;
  padding-right: 12px;
`;

export const Title = styled.Text`
  margin-top: 4px;
  color: #707070;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: #707070;
  margin-top: 4px;
  font-size: 14px;
  font-family: 'Poppins';
`;

export const IconView = styled.View`
  align-self: center;
  flex-direction: row;
`;

export const IconLove = styled(Icon).attrs({
  name: 'heart-outline'
})`
  color: #F24141;
  font-size: 28px;
  margin-right: 22px;
`;


export const RateView = styled.View`
  margin-top: 12px;
  flex-direction: row;
  align-items: flex-start;
`

export const IconStar = styled(Icon).attrs({
  name: 'star'
})`
  color: #F2B84B;
  font-size: 16px;
`;

export const IconStarHalf = styled(Icon).attrs({
  name: 'star-half'
})`
  color: #F2B84B;
  font-size: 16px;
`;

export const TextRate = styled.Text`
  color: #707070;
  margin-left: 4px;
  font-size: 14px;
  font-family: 'Poppins';
`;
