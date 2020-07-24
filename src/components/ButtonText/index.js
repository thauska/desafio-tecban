import React from 'react';
import PropTypes from 'prop-types';
import {Button, Text} from './styles';

const ButtonText = ({onPress, text, textColor, backgroundColor, ...rest}) => {
  return (
    <Button onPress={onPress} backgroundColor={backgroundColor} {...rest}>
      <Text style={textColor ? {color: textColor} : {}}>{text}</Text>
    </Button>
  );
};

ButtonText.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

ButtonText.defaultProps = {
  backgroundColor: undefined,
  textColor: undefined,
};

export default ButtonText;
