import React from 'react';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import './finance-footer.css';

export default class FinanceFooter extends React.Component {
    render() {
        return (
            <div className="finance-footer full-width">
                <div className="row-container">
                    <TrendingUpIcon className="footer-icon" style={{ fontSize: 35}}></TrendingUpIcon>
                    <p className="footer-text">by Solomiia Leno</p>
                </div>
            </div>
        );
    }
}