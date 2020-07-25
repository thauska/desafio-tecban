import styled from 'styled-components/native';
import {WebView} from 'react-native-webview';
import {colors} from '~/styles';

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  background: blue;
`;

export const Embed = styled(WebView)`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  background: ${colors.background};
`;
