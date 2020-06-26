import { CHANGE_TICKER_SYMBOL } from '../actions/action-types';


const initState = {
    tickerSymbol: '^GSPC'
};

function financePageReducer(state = initState, action) {
    switch (action.type) {
        case CHANGE_TICKER_SYMBOL:
            return { 
                ...state,
                tickerSymbol: action.tickerSymbol
            };
    }
}

export default financePageReducer;
