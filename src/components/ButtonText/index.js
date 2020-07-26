import React from 'react';
import PropTypes from 'prop-types';
import {Button, Text, Icon} from './styles';

const ButtonText = ({onPress, text, textColor, icon, backgroundColor, ...rest}) => {
  return (
    <Button onPress={onPress} backgroundColor={backgroundColor} {...rest}>
      <Text textColor={textColor}>{text}{icon && <Icon name={icon} />}</Text>
    </Button>
  );
};

ButtonText.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.string
};

ButtonText.defaultProps = {
  backgroundColor: undefined,
  textColor: undefined,
  icon: undefined
};

export default ButtonText;
