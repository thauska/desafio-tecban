import styled from 'styled-components/native';
import {StatusBar as StatusBarReact, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colorsGlobal from './colors';

export const colors = colorsGlobal;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${colorsGlobal.background};
`;

export const StatusBar = styled(StatusBarReact).attrs({
  barStyle: 'light-content',
  backgroundColor: colorsGlobal.statusBar,
})``;

export const ScrollContainer = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: true,
  fadingEdgeLength: 30,
  contentContainerStyle: {
    paddingBottom: 5,
  },
})`
  flex: 1;
  padding: 1px;
  background: ${colorsGlobal.background};
`;
