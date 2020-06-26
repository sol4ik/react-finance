import { CHANGE_TICKER_SYMBOL } from '../actions/action-types';


function financePageReducer(state, action) {
    switch (action.type) {
        case CHANGE_TICKER_SYMBOL:
            return { 
                ...state,
                tickerSymbol: action.tickerSymbol
            };
            
        default:
            return state;
    }
}

export default financePageReducer;
