import React from 'react';

import './finance-header.css';

export default class FinanceHeader extends React.Component {
    render() {
        return (
            <div className="finance-header full-width">
                <div className="titles-container">
                    <div className="main-title">react-finance</div>
                    <div className="subtitle">powered by React and Yahoo!Finance API</div>
                </div>
            </div>
        );
    }
}
