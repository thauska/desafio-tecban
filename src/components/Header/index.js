import React from 'react';
import {Container, TextLogo, TextView, TextName, IconSearch, AppLogo} from './styles';
import img from '~/assets/img';


const Header = () => {
    return (
        <Container>
            <AppLogo source={img.walletIcon} alt="logo" />
            <TextView>
                <TextLogo>Bicos</TextLogo>
                <TextName>Cláudio Silva</TextName>
            </TextView>
            <IconSearch />
        </Container>
    )
}

export default Header;