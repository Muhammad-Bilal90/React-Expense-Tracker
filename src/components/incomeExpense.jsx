import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    // const amounts = transactions.map(transaction => transaction.amount);

    // const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2);
    // const expense = amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0).toFixed(2);

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">PKR {getIncome()}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">PKR {Math.abs(getExpense())}</p>
            </div>
        </div>
    )
}

export default IncomeExpense;