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
                        <button className="search-button" type="submit">
                            <SearchIcon style={{ fontSize: 35 }}></SearchIcon>
                            </button>
                    </div>
                </form>
            </div>
        );
    }
}