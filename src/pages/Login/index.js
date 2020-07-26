import React from 'react';
import {Container as MainContainer} from '~/styles';
import {startAuthentication} from '~/services/api';
import {navigate} from '~/services/navigator'
import {Container, Embed} from './styles';

const Login = ({route}) => {
  const type = route.params.type
  const bank = route.params.bank

  const webViewRef = React.useRef(null);
  const [url, changeUrl] = React.useState('');

  const loadApi = () => {
    startAuthentication(bank).then((data) => changeUrl(data.url));
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
                console.error('Senha incorreta ou problema no login!')
              } else {
                const urlObject = new URL(url);
                const code = urlObject.searchParams.get('code');
                console.log('Code', code);
                if (type === 'bico') {
                  navigate('BicosList', {code})
                } else {
                  navigate('PeddingBicosList', {code})
                }
              }
            }
          }}
        />
      </Container>
    </MainContainer>
  );
};

Login.propTypes = {};

export default Login;
