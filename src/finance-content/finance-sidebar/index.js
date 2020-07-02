import React from 'react';

import FinanceStats from './finance-stats';
import FinanceInfo from './finance-info';

import './finance-sidebar.css';


export default class FinanceSideBar extends React.Component {
    render() {
        return (
            <div className="finance-sidebar column-container">
                <FinanceStats></FinanceStats>
                <FinanceInfo></FinanceInfo>
            </div>
        );
    }
}
