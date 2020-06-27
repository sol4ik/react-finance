import { createStore } from 'redux';
import financePageReducer from './reducers/finance-page-reducer';

const initState = {
    tickerSymbol: '',
    chartData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

function configStore() {
    return createStore(
        financePageReducer,
        initState,
        window.devToolsExtension ? window.devToolsExtension(): f => f
        );
}

export default configStore;