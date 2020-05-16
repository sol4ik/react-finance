import React from 'react';

import './finance-not-found.css';

export default class FinanceNotFound extends React.Component {
    render() {
        return(
            <div className="finance-not-found full-width">
                <div className="not-found-error-number">404</div>
                <div className="not-found-error-msg">sorry, but we can't find such page</div>
                <div className="not-found-description">
                    You must have mistaken the URL or entered invalid ticker symbol in the search bar at our web-site.
                    <br />
                    Try once again ツ
                </div>
            </div>
        );
    }
}
