import { CHANGE_TICKER_SYMBOL, UPDATE_CHART_DATA } from '../actions/action-types';


function financePageReducer(state, action) {
    switch (action.type) {
        case CHANGE_TICKER_SYMBOL:
            return { 
                ...state,
                tickerSymbol: action.tickerSymbol
            };

        case UPDATE_CHART_DATA:
            return {
                ...state,
                chartData: action.chartData
            }
            
        default:
            return state;
    }
}

export default financePageReducer;
