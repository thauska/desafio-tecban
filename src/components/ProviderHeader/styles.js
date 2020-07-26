import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';


export const Container = styled.View`
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
    elevation: 10;
    z-index: 999;
`;

export const TextView = styled.View`
    flex: 1;
    flex-direction: column;
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

export const InfoContent = styled.TouchableOpacity`
    background: #FFF;
    margin-top: -30px;
    height: 75px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    padding-bottom: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    elevation: 10;
`;

export const InfoText = styled.Text``;

export const Red = styled.Text`
    color: #D9483B;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: bold;
`;

export const Bold = styled.Text`
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: bold;
`;