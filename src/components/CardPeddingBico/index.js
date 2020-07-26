import React from 'react';
import PropTypes from 'prop-types';
import {Card, DescriptionView, Description, InfoView, Title, Date, Valor} from './styles';
import ButtonText from '~/components/ButtonText'

const CardPeddingBico = ({title, description, date, amount, onPress, ...rest}) => {
  return (
    <Card {...rest}>
      <DescriptionView>
        <Title>{title}</Title>
      </DescriptionView>
      <Description>
        {description}
      </Description>
      <InfoView>
        <Date>{date}</Date>
        <Valor>Valor do BICO: R$ {amount.replace('.', ',')}</Valor>
      </InfoView>
      <ButtonText onPress={onPress} icon='chevron-right' text='Aceitar' backgroundColor='#F2B84B' textColor='#F2F2F2' />
    </Card>
  );
};

CardPeddingBico.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default CardPeddingBico;
