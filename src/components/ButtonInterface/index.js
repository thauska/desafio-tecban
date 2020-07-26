import React, { useState } from 'react';
import { Btn, Text } from './styles';

const ButtonInterface = (props) => {
    const [count, setCount] = useState(0);
    const onPress = () => console.warn('hello!');
    // const text = () => 

    return (
        <Btn onPress={onPress}>
            <Text>Botão</Text>
        </Btn>
    )
}

export default ButtonInterface;