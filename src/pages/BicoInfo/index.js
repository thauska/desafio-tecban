import React from 'react';
import {Container as MainContainer} from '~/styles';
import CardInfoBico from '~/components/CardInfoBico'
import {navigate} from '~/services/navigator'
import {bicosGet} from '~/services/api';
import {Container, ScrollContainer} from './styles';

const BicoInfo = ({route}) => {
  const id = route.params.id

  const [bico, changeBico] = React.useState({title: 'Carregando...'});

  const loadApi = () => {
    bicosGet(id).then(bicosData => {
      console.log(bicosData)
      changeBico(bicosData.list[0])
    })
  }

  React.useEffect(loadApi, []);

  return (
    <MainContainer>
      <ScrollContainer>
        <Container>
          <CardInfoBico
            title={bico.name}
            subtitle={bico.type}
            photo={bico.photo}
            description={bico.description}
          />
        </Container>
      </ScrollContainer>
    </MainContainer>
  );
};

BicoInfo.propTypes = {};

export default BicoInfo;
