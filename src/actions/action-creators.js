import { CHANGE_TICKER_SYMBOL } from 'action-types';


const changeTickerSymbol = (tickerSymbol) => ({
        type: CHANGE_TICKER_SYMBOL,
        tickerSymbol
    })

export default changeTickerSymbol;
