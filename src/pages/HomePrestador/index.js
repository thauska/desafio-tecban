import React from 'react';
import {Container as MainContainer} from '~/styles';
import {transactionsGet} from '~/services/api';
import {navigate} from '~/services/navigator'
import CardTransactions from '~/components/CardTransactions'

import {Container, ScrollContainer} from './styles';

const HomePrestador = () => {
  const [transactions, changeTransactions] = React.useState([]);
  const [amount, changeAmount] = React.useState('00.00');

  const loadApi = () => {
    transactionsGet('7e7ff095-5a47-40ff-8419-10a5fd379d07').then(transactionsData => {
      console.log(transactionsData)
      changeTransactions(transactionsData.list)
      changeAmount(transactionsData.total)
    })
  }

  React.useEffect(loadApi, []);

  return (
    <MainContainer>
      <ScrollContainer>
        <Container>
          {transactions.map((transaction) => <CardTransactions
            key={transaction.id}
            name={transaction.name}
            date={transaction.date}
            amount={transaction.amount}
          />)}
        </Container>
      </ScrollContainer>
    </MainContainer>
  );
};

HomePrestador.propTypes = {};

export default HomePrestador;
