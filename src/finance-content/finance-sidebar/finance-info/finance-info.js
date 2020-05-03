import React from 'react';

import './finance-info.css';

export default class FinanceInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'S&P 500 index',
            text: 'All the data here is simply random and has no sence :) Later, above the info box, there might also be some nicely visualised statistics on daily changes and so on'
        }
    }
    render() {
        return(
            <div className="finance-info-box">
                <p className="info-box-title">{this.state.title}</p>
                <p className="info-box-text">{this.state.text}</p>
            </div>
        );
    }
}