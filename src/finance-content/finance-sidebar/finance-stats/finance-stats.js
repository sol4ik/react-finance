import React from 'react';

import $ from 'jquery';

import './finance-stats.css';

export default class FinanseStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summaryData: {
                growthSign: '⬆',
                curValue: '2,921.96',
                curGrowth: '+40.77 (+1.42%)',
                prevClose: '2,881.19',
                open: '2908.83',
                volume:	'1,014,940,598',
                dayRange: '2,902.88 - 2,919.05',
                yearRange: '2,191.86 - 3,393.52',
                avgVolume: '6,039,020,806'
            }
        }
    }
    componentDidMount() {
        // $.getJSON('/content/' + this.props.tickerSymb + '.json', function(json) {
        //     console.log(json);
            
            // this.setState({
            //     summaryData: data
            // });
        // });
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