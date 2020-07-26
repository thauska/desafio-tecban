import React from 'react';
import {Container as MainContainer} from '~/styles';

import CardInfoBico from '~/components/CardInfoBico'

import {Container, ScrollContainer} from './styles';

const BicoInfo = () => {
  return (
    <MainContainer>
      <ScrollContainer>
        <Container>
          <CardInfoBico
            title='Thânia Ramos'
            subtitle='Diarista'
            photo='https://avatars1.githubusercontent.com/u/5731176?s=460'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
          />
        </Container>
      </ScrollContainer>
    </MainContainer>
  );
};

BicoInfo.propTypes = {};

export default BicoInfo;
