import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';


export const Card = styled.View.attrs({
  elevation: 1.5,
})`
  background: #FFF;
  flex: 1;
  width: 100%;
  border-radius: 32px;
  margin-top: 40px;
  margin-left: 9px;
  margin-right: 9px;
  margin-bottom: 27px;
  padding-bottom: 22px;
  flex-direction: column;
  align-items: center;
  padding-right: 34px;
  padding-left: 34px;
`;

export const Photo = styled.Image`
  width: 165px;
  height: 174px;
  border-radius: 32px;
  margin-top: -29px;
`;

export const DescriptionView = styled.View`
  padding-top: 13px;
  margin-bottom: 18px;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-right: 7px;
  color: #707070;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: #707070;
  font-size: 14px;
  font-family: 'Poppins';
`;

export const Description = styled.Text`
  color: #707070;
  font-size: 14px;
  font-family: 'Poppins';
`;

export const IconView = styled.View`
  position: absolute;
  top: 39px;
  right: 28px;
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
  margin-bottom: 30px;
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
