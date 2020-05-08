import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './finance-search.css';

export default class FinanceSearch extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="finance-search-bar full-width">
                <form className="search-form">
                    <div className="right-float-wrapper">
                        <input className="search-input" type="text" placeholder="search.."/>
                        <div className="seach-button-container">
                            <div className="search-button">
                                <a className="search-link" href="#">
                                    <SearchIcon className="search-icon"></SearchIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
