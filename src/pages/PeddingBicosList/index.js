import React from 'react';
import {Container as MainContainer} from '~/styles';
import {peddingBicosGet} from '~/services/api';
import {navigate} from '~/services/navigator'
import CardPeddingBico from '~/components/CardPeddingBico'
import ProviderHeader from "~/components/ProviderHeader";
import {Container, ScrollContainer} from './styles';

const PeddingBicosList = ({route}) => {
  const [bicos, changeBicos] = React.useState([]);

  const loadApi = () => {
    peddingBicosGet('7e7ff095-5a47-40ff-8419-10a5fd379d07').then(bicosData => {
      console.log(bicosData)
      changeBicos(bicosData.list)
    })
  }

  React.useEffect(loadApi, []);

  return (
    <MainContainer>
      <ProviderHeader />
      <ScrollContainer>
        <Container>
          {bicos.map(bico =>
            <CardPeddingBico
              key={bico.id}
              title={bico.name}
              description={bico.description}
              date={bico.date}
              amount={bico.amount}
              onPress={() => {navigate('BicoDone', {id: bico.id})}}
            />
          )}
        </Container>
      </ScrollContainer>
    </MainContainer>
  );
};

PeddingBicosList.propTypes = {};

export default PeddingBicosList;
