import React from 'react';
import { Container, MainContent, TextView, Name, Balance, IconSearch, InfoContent, InfoText } from './styles'

const ProviderHeader = () => {
    return (
        <Container>
            <MainContent >
                <TextView>
                    <Name>Cláudio Silva</Name>
                    <Balance>Saldo disponível: R$ 854,00</Balance>
                </TextView>
                <IconSearch></IconSearch>
            </MainContent>
            <InfoContent>
                <InfoText></InfoText>
            </InfoContent>
        </Container>
    )
};

export default ProviderHeader;