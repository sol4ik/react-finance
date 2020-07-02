import React from 'react';

import FinanceChart from './finance-chart';
import FinanceSideBar from './finance-sidebar';

import './finance-content.css';


export default class FinanceContent extends React.Component {
    render() {
        return (
            <div className="page-content full-width row-container">
                    <FinanceChart></FinanceChart>
                    <FinanceSideBar></FinanceSideBar>
            </div>
        );
    }
}
