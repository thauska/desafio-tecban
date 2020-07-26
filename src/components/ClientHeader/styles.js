import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';

export const Container = styled.View`
    flex: 1;
    max-height: 300px;
    z-index: 5;
`;

export const HeaderAnimated = styled.View`
    position: absolute;
    height: 100%;
    background: ${(prop) => prop.backgroundColor || colors.colorBlue};
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
`;

export const ContContent = styled.View`
    padding: 0 60px;
    flex: 1;
    justify-content: flex-end;
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
export const Footer = styled.View`
    flex:1
    flex-direction: row;
    justify-content: space-around;
    padding: 40px;
`;

export const FlexEnd = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
`;

export const TextView = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const AppLogo = styled.Image`
    margin-right: 10px;
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