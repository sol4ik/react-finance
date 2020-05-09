import React from 'react';

import './finance-stats.css';

// growth sign constants
const up = '⬆';
const down = '⬇';


export default class FinanseStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summaryData: {
                growthSign: '⬆',
                curValue: '-',
                curGrowth: '+0 (+0%)',
                prevClose: '0',
                open: '0',
                volume:	'0',
                dayRange: '0',
                yearRange: '0',
                avgVolume: '0'
            }
        }
    }
    componentDidMount() {
        const jsonFilePath = require("./content/" + this.props.tickerSymb + ".txt");
        
        fetch(jsonFilePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
                summaryData: JSON.parse(text)
            })
          });
    }
    render() {
        return (
            <div className="finance-stats">
                <div className="cur-data row-container">
                    <div className="growth-sign">{this.state.summaryData.growthSign}</div>
                    <div className="cur-value">{this.state.summaryData.curValue}</div>
                    <div className="cur-growth">{this.state.summaryData.curGrowth}</div>
                </div>

                <hr className="divider"/>

                <div className="summary-title">Summary</div>
                <div className="row-container">
                    <table className="summary-table">
                        <tbody>
                            <tr>
                                <td className="table-title">Previous Close</td>
                                <td>{this.state.summaryData.prevClose}</td>
                            </tr>
                            <tr>
                                <td className="table-title">Open</td>
                                <td>{this.state.summaryData.open}</td>
                            </tr>
                            <tr>
                                <td className="table-title">Volume</td>
                                <td>{this.state.summaryData.volume}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="summary-table">
                        <tbody>
                            <tr>
                                <td className="table-title">Day's Range</td>
                                <td>{this.state.summaryData.dayRange}</td>
                            </tr>
                            <tr>
                                <td className="table-title">52 Week Range</td>
                                <td>{this.state.summaryData.yearRange}</td>
                            </tr>
                            <tr>
                                <td className="table-title">Avg. Volume</td>
                                <td>{this.state.summaryData.avgVolume}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}