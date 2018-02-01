const INITIAL_STATE = {summary: {debit:1070, credit:3219}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'BILLING_SUMMARY_FETCHED':
            return {...state, summary: action.payload.data}
        default:
            return state
    }
}