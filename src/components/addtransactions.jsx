import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const AddTransactions = () => {
    let [category, setCategory] = useState("");
    let [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransactions = {
            id: Math.floor(Math.random() * 1000000),
            category: category,
            amount: Number(amount)
        }

        addTransaction(newTransactions);
        setCategory('');
        setAmount(0);
     
    }

    return (
        <>
            <h3>Add Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="category">category</label>
                    <input type="text" required value={category} onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/ >
                    (Negative - Expense, Positive - Income)</label>
                    <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransactions;