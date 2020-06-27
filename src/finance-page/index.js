import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import FinanceHeader from './finance-header';
import FinanceSearch from './finance-search';
import FinanceWelcome from '../finance-welcome';
import FinanceContent from '../finance-content'; 
import FinanceFooter from './finance-footer';
import FinanceNotFound from '../finance-not-found';

import { changeTickerSymbol } from '../actions/action-creators';
import { connect } from 'react-redux';

import './finance-page.css';

class FinancePage extends React.Component {
    render() {
        return (
            <div className="finance-page">
                <div className="above-footer-section">
                    <FinanceHeader></FinanceHeader>
                
                <Router>
                    <div className="nav-buttons-container full-width">
                        <div className="nav-buttons">                        
                            <button className="routing-button" onClick={() => 
                                    this.props.changeTickerSymbol('dji') }>
                                <Link
                                    to="/dji"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        fontSize: '14px'
                                    }}
                                >The Dow Jones Index</Link>
                            </button>

                            <button className="routing-button" onClick={() => 
                                    this.props.changeTickerSymbol('gspc') }>
                                <Link 
                                    to="/gspc"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        fontSize: '14px'
                                    }}
                                >The S&#x26;P 500 Index</Link>
                            </button>

                            <button className="routing-button" onClick={() => 
                                    this.props.changeTickerSymbol('') }>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        fontSize: '14px'
                                    }}
                                >Home</Link>
                            </button>
                        </div>
                    </div>
                       
                    <FinanceSearch></FinanceSearch> 
                                        
                    <Switch>
                        <Route
                            exact path="/"
                            component={ FinanceWelcome }
                        />
                        <Route
                            exact path="/gspc"
                            component={ FinanceContent }
                        />
                        <Route
                            path="/dji"
                            component={ FinanceContent }
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

const mapStateToProps = (state, ownProps) => ({
    tickerSymbol: state.tickerSymbol
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeTickerSymbol: (tickerSymbol) => dispatch(changeTickerSymbol(tickerSymbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(FinancePage);
