import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import FinanceHeader from './finance-header';
import FinanceSearch from './finance-search';
import FinanceWelcome from '../finance-welcome';
import FinanceContent from '../finance-content'; 
import FinanceFooter from './finance-footer';
import FinanceNotFound from '../finance-not-found';

import './finance-page.css';

export default class FinancePage extends React.Component {
    render() {
        return (
            <div className="finance-page">
                <div className="above-footer-section">
                    <FinanceHeader></FinanceHeader>
                    <FinanceSearch></FinanceSearch>
                
                <Router>
                    <div className="routing-button-container">
                    <button className="routing-button" onClick={() => 
                        dispatch(changeTickerSymbol('')) }>1st more info </button>
                        <Link to="/">Home</Link>
                    </div>
                    
                    <div className="routing-button-container">
                    <button className="routing-button" onClick={() => 
                        dispatch(changeTickerSymbol('dji')) }>1st more info </button>
                        <Link to="/dji">The Dow-Jones Index</Link>
                    </div>

                    <div className="routing-button-container">
                    <button className="routing-button" onClick={() => 
                        dispatch(changeTickerSymbol('gspc')) }>1st more info </button>
                        <Link to="/gspc">The S P 500 Industrial Average</Link>
                    </div>



                    <Switch>
                        <Route
                            exact path="/"
                            component={ FinanceWelcome }
                        />
                        <Route
                            exact path="/gspc"
                            render={(props) => <FinanceContent {...props} tickerSymb={'gspc'} />}
                        />
                        <Route
                            path="/dji"
                            render={(props) => <FinanceContent {...props} tickerSymb={'dji'} />}
                        />
                        <Route
                            component={ FinanceNotFound }
                        />
                    </Switch>
                </Router>
                </div>
                <FinanceFooter></FinanceFooter>
            </div>
        );
    }
}
