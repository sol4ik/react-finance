import { CHANGE_TICKER_SYMBOL, UPDATE_CHART_DATA } from './action-types';


const changeTickerSymbol = (ts) => ({
        type: CHANGE_TICKER_SYMBOL,
        tickerSymbol: ts
    });

const updateChartData = (cd) => ({
        type: UPDATE_CHART_DATA,
        chartData: cd
})

export { changeTickerSymbol, updateChartData };
