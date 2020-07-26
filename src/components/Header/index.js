import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {Container, Content, Footer, Income, Money, TextLogo, TextView, TextName, IconSearch, AppLogo} from './styles';
import img from '~/assets/img';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


const Header = () => {
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translateY: translateY
                }
            }
        ],
        { useNativeDriver: true }
    );

    function onHandlerStateChange(event){

    }

    return (
        <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
        >
            <Container 
                style={{
                    transform: [{
                        translateY
                    }]
                }}
            >
                <Content>
                    <Income>Sua conta rendeu 0,35% no último mês</Income>
                    <Money>R$ 250,35</Money>
                </Content>
                <Footer>
                    <AppLogo source={img.walletIcon} alt="logo" />
                    <TextView>
                        <TextLogo>Bicos</TextLogo>
                        <TextName>Cláudio Silva</TextName>
                    </TextView>
                    <IconSearch />
                </Footer>
            </Container>
        </PanGestureHandler>
    )
}

export default Header;