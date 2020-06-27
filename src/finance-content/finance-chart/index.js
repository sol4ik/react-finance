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
            
            if (this.props.chartData[0] != -1) { // vheck for default values
              chartData["data"]["datasets"][0]["data"] = this.props.chartData;
            }

            this.setState(prevState => ({
                title: chartData["title"],
                subtitle: chartData["subtitle"],
                data: chartData["data"]
            }))
          });
    }
    updateChartInfo() {
      const min = 0;
      const max = 10000;
      let newData = [];
      
      for (let i = 0; i < 12; i++) {
        newData.push(min + Math.random() * (max - min));
      }

      this.props.updateChartData(newData);
    }
    
    componentDidMount() {
      this.updateChartParameters()
    }
    componentDidUpdate(prevProps) {
      if (!equal(this.props.tickerSymbol, prevProps.tickerSymbol) || !equal(this.props.chartData, prevProps.chartData)) {
        this.updateChartParameters();
      }
    }

    render() {
    return (
      <div className="finance-chart-container">
        <p className="finance-chart-title">{this.state.title}</p>
        <p className="finance-chart-subtitle">{this.state.subtitle}</p>
        <Line data={this.state.data} options={this.state.options}/>
        <button className="update-button" 
          onClick={ () => this.updateChartInfo() }>
          update chart data
        </button>
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
