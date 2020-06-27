import React from 'react';

import './finance-stats.css';

import { connect } from 'react-redux';
import { changeTickerSymbol } from '../../../actions/action-creators';

import equal from 'fast-deep-equal';

// growth sign constants
const up = '⬆';
const down = '⬇';


class FinanceStats extends React.Component {
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
    updateStats() {
        const jsonFilePath = require("./content/" + this.props.tickerSymbol + ".txt");
        
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

    componentDidMount() {
        this.updateStats();
    }
    componentDidUpdate(prevProps) {
        if (!equal(this.props.tickerSymbol, prevProps.tickerSymbol)) {
          this.updateStats();
        }
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

const mapStateToProps = (state, ownProps) => ({
    tickerSymbol: state.tickerSymbol
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeTickerSymbol: (tickerSymbol) => dispatch(changeTickerSymbol(tickerSymbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(FinanceStats);
