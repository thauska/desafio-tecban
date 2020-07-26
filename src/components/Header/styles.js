import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    top: 0;
    height: 120px;
    background: ${(prop) => prop.backgroundColor || colors.colorBlue};
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
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
    margin-right: 30px;
`;

export const AppLogo = styled.Image`
    margin-right: 10px;
    margin-left: 30px;
    align-content: center;

`;