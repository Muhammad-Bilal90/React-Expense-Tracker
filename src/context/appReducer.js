const AppReducer = ((state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
            case "DELETE":
                // const newState = [...state.transactions]
                // newState.splice(action.payload, 1)
                return {
                    ...state,
                    transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
                    // transactions: newState
                }   
        default:
            return state;
    }
})

export default AppReducer;