import React from 'react';
import { Container, Red, Bold, MainContent, TextView, Name, Balance, IconSearch, InfoContent, InfoText } from './styles'
import {navigate} from '~/services/navigator'
import {peddingBicosGet} from '~/services/api';

const ProviderHeader = () => {
    const [bicos, changeBicos] = React.useState([]);
    const [total, changeTotal] = React.useState('0');

    const loadApi = () => {
      peddingBicosGet('7e7ff095-5a47-40ff-8419-10a5fd379d07').then(bicosData => {
        console.log(bicosData)
        changeBicos(bicosData.list)
        changeTotal(bicosData.total)
      })
    }

    React.useEffect(loadApi, []);

    return (
        <Container>
            <MainContent >
                <TextView>
                    <Name>Tiago Danin</Name>
                    <Balance>Saldo disponível: R$ {total}</Balance>
                </TextView>
                <IconSearch></IconSearch>
            </MainContent>
            <InfoContent onPress={() => {navigate('PeddingBicosList')}}>
                <InfoText>Você tem <Red>{bicos.length}</Red> solicitações de <Bold>BICO</Bold></InfoText>
            </InfoContent>
        </Container>
    )
};

export default ProviderHeader;