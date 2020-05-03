import React from 'react';

import FinanceInfo from './finance-info/finance-info';

import './finance-sidebar.css';

export default class FinanceSideBar extends React.Component {
    render() {
        return (
            <div className="finance-sidebar">
                <FinanceInfo></FinanceInfo>
            </div>
        );
    }
}