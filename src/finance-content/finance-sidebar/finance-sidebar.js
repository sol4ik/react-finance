import React from 'react';

import FinanceStats from './finance-stats/finance-stats';
import FinanceInfo from './finance-info/finance-info';

import './finance-sidebar.css';

export default class FinanceSideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="finance-sidebar column-container">
                <FinanceStats tickerSymb={ this.props.tickerSymb }></FinanceStats>
                <FinanceInfo tickerSymb={ this.props.tickerSymb }></FinanceInfo>
            </div>
        );
    }
}