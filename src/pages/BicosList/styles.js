import styled from 'styled-components/native';
import {colors, ScrollContainer as ScrollContainerComponent} from '~/styles';

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  background: #F1F1F1;
`;

export const ScrollContainer = styled(ScrollContainerComponent).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
})`
`;