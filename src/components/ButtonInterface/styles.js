import styled from 'styled-components/native';
import {colors} from '~/styles';

export const Btn = styled.TouchableOpacity`
    background: ${(prop) => prop.backgroundColor || colors.buttonPrimary};
    alignItems: center;
    justifyContent: center;
    border-radius: 10px;
`;

export const Text = styled.Text`
    color: ${props => props.color ? colors.buttonText : colors.textDark};
    font-weight: 700;
    align-self: center;
    padding: 10px;
`;