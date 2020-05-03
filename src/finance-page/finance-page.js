import React from 'react';

import FinanceHeader from './finance-header/finance-header';
import FinanceSearch from './finance-search/finance-search';
import FinanceChart from '../finance-content/finance-chart/finance-chart';
import FinanceSideBar from '../finance-content/finance-sidebar/finance-sidebar';

import './finance-page.css';

export default class FinancePage extends React.Component {
    render() {
        return (
            <div className="finance-page">
                <FinanceHeader></FinanceHeader>
                <FinanceSearch></FinanceSearch>
                <div className="page-content full-width row-container">
                    <FinanceChart></FinanceChart>
                    <FinanceSideBar></FinanceSideBar>
                </div>
            </div>
        );
    }
}