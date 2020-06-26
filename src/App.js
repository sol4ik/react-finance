import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import financePageReducer from './reducers/finance-page-reducer';
import './App.css';
import FinancePage from './finance-page';


const store = createStore(financePageReducer);


function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <FinancePage>
        </FinancePage>
      </div>
    </Provider>
  );
}

export default App;
