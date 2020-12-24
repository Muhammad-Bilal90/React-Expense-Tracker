import React from 'react';
import './App.css';
import { GlobalProvider } from './context/globalState';
import Header from './components/header';
import Balance from './components/balance';
import IncomeExpense from './components/incomeExpense';
import TransactionList from './components/transactionsList';
import AddTransactions from './components/addtransactions';

function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className="container">
        <Balance />
        <IncomeExpense /> 
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
