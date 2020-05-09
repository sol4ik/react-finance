import React from 'react';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FinanceHeader from './finance-header';
import FinanceSearch from './finance-search';
import FinanceWelcome from '../finance-welcome';
import FinanceContent from '../finance-content'; 
import FinanceFooter from './finance-footer';
import FinanceNotFound from '../finance-not-found';

export default class FinancePage extends React.Component {
    render() {
        return (
            <div className="finance-page">
                <div className="header-section">
                    <FinanceHeader></FinanceHeader>
                    <FinanceSearch></FinanceSearch>
                </div>
                <Router>
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
                <FinanceFooter></FinanceFooter>
            </div>
        );
    }
}