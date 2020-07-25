import React from 'react';
import {Container as MainContainer} from '~/styles';
import {startAuthentication} from '~/services/api';

import {Container, Embed} from './styles';

const Main = () => {
  const webViewRef = React.useRef(null);
  const [url, changeUrl] = React.useState('https://github.com');

  const loadApi = () => {
    startAuthentication(1).then((data) => changeUrl(data.url));
  };

  React.useEffect(loadApi, []);

  return (
    <MainContainer>
      <Container>
        <Embed
          ref={webViewRef}
          originWhitelist={['*']}
          source={{uri: url}}
          onLoad={(syntheticEvent) => {
            const {url} = syntheticEvent.nativeEvent;
            if (url.startsWith('https://www.google.co.uk')) {
              if (url.includes('access_denied')) {
                loadApi();
              } else {
                const urlObject = new URL(url);
                const code = urlObject.searchParams.get('code');
                console.log('Code', code);
              }
            }
          }}
        />
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {};

export default Main;
