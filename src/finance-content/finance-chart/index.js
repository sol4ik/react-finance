import React from 'react';
import {Line} from 'react-chartjs-2';

import './finance-chart.css';

import { changeTickerSymbol, updateChartData } from '../../actions/action-creators';
import { connect } from 'react-redux';

import equal from 'fast-deep-equal';


class FinanceChart extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            subtitle: '',
            data: {},
            options: {
                legend: {
                    display: false
                }
            }
        }
    }
    updateChartParameters(){
      const jsonFilePath = require("./content/" + this.props.tickerSymbol + ".txt");
        
        fetch(jsonFilePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            const chartData = JSON.parse(text);
            this.setState(prevState => ({
                title: chartData["title"],
                subtitle: chartData["subtitle"],
                data: chartData["data"]
            }))
          });
    }
    
    componentDidMount() {
      this.updateChartParameters()
    }
    componentDidUpdate(prevProps) {
      if (!equal(this.props.tickerSymbol, prevProps.tickerSymbol)) {
        this.updateChartParameters();
      }
    }

    render() {
    return (
      <div className="finance-chart-container">
        <p className="finance-chart-title">{this.state.title}</p>
        <p className="finance-chart-subtitle">{this.state.subtitle}</p>
        <Line data={this.state.data} options={this.state.options}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  tickerSymbol: state.tickerSymbol,
  chartData: state.chartData
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeTickerSymbol: (tickerSymbol) => dispatch(changeTickerSymbol(tickerSymbol)),
  updateChartData: (chartData) => dispatch(updateChartData(chartData))
});

export default connect(mapStateToProps, mapDispatchToProps)(FinanceChart);
