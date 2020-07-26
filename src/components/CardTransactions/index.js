import React from 'react';
import PropTypes from 'prop-types';
import {Card, DescriptionView, InfoView, Title, Date, Valor} from './styles';

const CardTransactions = ({name, date, amount, ...rest}) => {
  if (!amount) {
    amount = ''
  }
  const isPositive = Number(amount) > 0;

  return (
    <Card {...rest}>
      <DescriptionView>
        <Title>{name}</Title>
        <Date>{date}</Date>
      </DescriptionView>
      <InfoView>
        <Valor isPositive={isPositive}>{isPositive ? '+' : '-' } R$ {amount.replace('.', ',')}</Valor>
      </InfoView>
    </Card>
  );
};

CardTransactions.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default CardTransactions;
