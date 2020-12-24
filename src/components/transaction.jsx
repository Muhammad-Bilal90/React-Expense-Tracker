import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.category} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className={`delete-btn ${transaction.amount < 0 ? 'del-red' : 'del-green'}`}>x</button>
    </li>
  )
}

export default Transaction;