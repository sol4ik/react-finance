import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store';
import './App.css';
import FinancePage from './finance-page';


const store = configStore();


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
