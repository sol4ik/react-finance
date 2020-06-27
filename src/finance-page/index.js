import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import FinanceHeader from './finance-header';
import FinanceSearch from './finance-search';
import FinanceWelcome from '../finance-welcome';
import FinanceContent from '../finance-content'; 
import FinanceFooter from './finance-footer';
import FinanceNotFound from '../finance-not-found';

import { changeTickerSymbol, updateChartData } from '../actions/action-creators';
import { connect } from 'react-redux';

import './finance-page.css';

class FinancePage extends React.Component {
    updateData(route) {
        let newChartData = [];
        
        if (route === "dji" || route === "gspc") {            
            const min = 0;
            const max = 10000;
            for (let i = 0; i < 12; i++) {
                newChartData.push(min + Math.random() * (max - min))
            }
        } else {
            for (let i = 0; i < 12; i++) {
                newChartData.push(-1);
            }
        }

        this.props.changeTickerSymbol(route);
        this.props.updateChartData(newChartData);
    }
    
    render() {
        return (
            <div className="finance-page">
                <div className="above-footer-section">
                    <FinanceHeader></FinanceHeader>
                
                <Router>
                    <div className="nav-buttons-container full-width">
                        <div className="nav-buttons">                        
                            <button className="routing-button" onClick={() => 
                                    this.updateData('dji') }>
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
                                    this.updateData('gspc') }>
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
                                    this.updateData('') }>
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
    tickerSymbol: state.tickerSymbol,
    chartData: state.chartData
  });
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    changeTickerSymbol: (tickerSymbol) => dispatch(changeTickerSymbol(tickerSymbol)),
    updateChartData: (chartData) => dispatch(updateChartData(chartData))
  });

export default connect(mapStateToProps, mapDispatchToProps)(FinancePage);
