import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer'


const initialState = {
    transactions: [
        {id:1, category: "Cash", amount: 500},
        {id:2, category: "Payment", amount: -200},
        {id:3, category: "Rent", amount: -200}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
