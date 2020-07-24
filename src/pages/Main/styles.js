import styled from 'styled-components/native';
import {colors, ScrollContainer as ScrollContainerComponent} from '~/styles';

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ScrollContainer = styled(ScrollContainerComponent).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
})`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  font-family: 'Roboto';
  font-size: 29px;
  font-weight: 700;
  color: ${colors.textDark};
`;

export const Description = styled.Text`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${colors.textDark};
`;
