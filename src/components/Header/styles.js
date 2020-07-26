import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';

export const Container = styled(Animated.View)`
    flex: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    height: 500px;
    background: ${(prop) => prop.backgroundColor || colors.colorBlue};
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
`;

export const Content = styled(Animated.View)`
    flex: 1;
    padding: 0 60px;
    justify-content: center;
`;

export const Income = styled.Text`
    font-size: 18px;
    font-weight: 100;
    text-align: center;
    color: ${colors.textLight};
    flex-wrap: wrap;
`;

export const Money = styled.Text`
    font-size: 57px;
    font-weight: 900;
    text-align: center;
    color: ${colors.textLight}
`;
export const Footer = styled(Animated.View)`
    position: absolute;
    flex-direction: row;
    align-items: center;
    padding: 40px;
    bottom: 0;
`;

export const TextView = styled.View`
    flex: 1;
`;


export const TextLogo = styled.Text`
    font-size: 18px;
    color: ${colors.textLight};
    font-weight: bold;
`;

export const TextName = styled.Text`
    font-size: 14px;
    color: ${colors.textLight};
    font-weight: normal;
`;

export const IconSearch = styled(Icon).attrs({
    name: 'magnify'
})`
    color: ${colors.textLight}
    font-size: 40px;
`;

export const AppLogo = styled.Image`
    margin-right: 10px;
    align-content: center;
`;