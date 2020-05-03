import React from 'react';

export default class FinanceInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'S&P 500 index',
            text: 'all the data here is simply random and has no sence :)'
        }
    }
    render() {
        return(
            <div className="finance-info-box">
                <p className="info-box-title">{this.state.title}</p>
                
            </div>
        );
    }
}