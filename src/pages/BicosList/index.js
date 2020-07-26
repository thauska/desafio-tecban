import React from 'react';
import {Container as MainContainer} from '~/styles';

import CardProfileBico from '~/components/CardProfileBico'

import {Container, ScrollContainer} from './styles';

const BicosList = () => {
  return (
    <MainContainer>
      <ScrollContainer>
        <Container>
          <CardProfileBico
            title='Thânia Ramos'
            subtitle='Diarista'
            photo='https://avatars1.githubusercontent.com/u/5731176?s=460'
            onPress={() => {}}
          />
        </Container>
      </ScrollContainer>
    </MainContainer>
  );
};

BicosList.propTypes = {};

export default BicosList;
