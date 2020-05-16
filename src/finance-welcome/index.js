import React from 'react';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import './finance-welcome.css';

export default class FinanceWelcome extends React.Component {
    render() {
        return(
            <div className="finance-welcome full-width">
                <div className="welcome-icon-container">
                    <TrendingUpIcon
                        className="welcome-icon"
                        style={{ fontSize: 115}}>
                    </TrendingUpIcon>
                </div>
                <div className="welcome-title">Welcome to react-finance!</div>
                <div className="welcome-description">
                    This web page is a user-friendly interpretation of Yahoo! Finance data that will hopefully
                    be more clear and helpful for people.
                    <br/>
                    But in fact, this is also my home assignment for Web development course - React development module :)
                    <br />
                    Stay healthy ♡
                </div>
            </div>
        );
    }
}
