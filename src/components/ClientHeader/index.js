import React from 'react';
import {Container, FlexEnd, ContContent, HeaderAnimated, Footer, Income, Money, TextLogo, TextView, TextName, IconSearch, AppLogo} from './styles';
import img from '~/assets/img';


const ClientHeader = () => {

    return (
        <Container>
            <HeaderAnimated>
                <ContContent>
                    <Income>Sua conta rendeu 0,35% no último mês</Income>
                    <Money>R$ 250,35</Money>
                </ContContent>
                <FlexEnd>
                    <Footer>
                        <AppLogo source={img.walletIcon} alt="logo" />
                        <TextView>
                            <TextLogo>Bicos</TextLogo>
                            <TextName>Cláudio Silva</TextName>
                        </TextView>
                        <IconSearch />
                    </Footer>
                </FlexEnd>
            </HeaderAnimated>
        </Container>
    )
}

export default ClientHeader;