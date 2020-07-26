import React from 'react';
import {Container as MainContainer} from '~/styles';
import {bicosGet} from '~/services/api';
import {navigate} from '~/services/navigator'
import CardProfileBico from '~/components/CardProfileBico'
import ClientHeader from "~/components/ClientHeader";

import {Container, ScrollContainer} from './styles';

const BicosList = () => {
  const [bicos, changeBicos] = React.useState([]);

  const loadApi = () => {
    bicosGet('all').then(bicosData => {
      console.log(bicosData)
      changeBicos(bicosData.list)
    })
  }

  React.useEffect(loadApi, []);

  return (
    <MainContainer>
      <ClientHeader />
      <ScrollContainer>
        <Container>
          {bicos.map(bico =>
            <CardProfileBico
              key={bico.id}
              title={bico.name}
              subtitle={bico.type}
              photo={bico.photo}
              onPress={() => {navigate('BicoInfo', {id: bico.id})}}
            />
          )}
        </Container>
      </ScrollContainer>
    </MainContainer>
  );
};

BicosList.propTypes = {};

export default BicosList;
