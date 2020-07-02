import { createStore } from 'redux';
import financePageReducer from './reducers/finance-page-reducer';

const initState = {
    tickerSymbol: '',
    chartData: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
};

function configStore() {
    return createStore(
        financePageReducer,
        initState,
        window.devToolsExtension ? window.devToolsExtension(): f => f
        );
}

export default configStore;