import React from 'react';

import FinanceChart from './finance-chart';
import FinanceSideBar from './finance-sidebar';

import './finance-content.css';

export default class FinanceContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page-content full-width row-container">
                    <FinanceChart tickerSymb={ this.props.tickerSymb }></FinanceChart>
                    <FinanceSideBar tickerSymb={ this.props.tickerSymb }></FinanceSideBar>
            </div>
        );
    }
}