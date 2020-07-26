import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';


export const Container = styled.View`
    flex: 1;
    max-height: 200px;
    z-index: 5;
`;

export const MainContent = styled.View`
    background: ${(prop) => prop.backgroundColor || colors.colorRed};
    height: 90px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    elevation: 10
`;

export const TextView = styled.View`
    flex: 1;
    flex-direction: column
`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${colors.textLight};
`;

export const Balance = styled.Text`
    color: ${colors.textLight};
    font-size: 16px;
    font-weight: 400;
`;

export const IconSearch = styled(Icon).attrs({
    name: 'magnify'
})`
    color: ${colors.textLight};
    font-size: 40px;
`;

export const InfoContent = styled.View``;

export const InfoText = styled.Text``;