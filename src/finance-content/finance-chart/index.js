import React from 'react';
import {Line} from 'react-chartjs-2';

import './finance-chart.css';


export default class FinanceChart extends React.Component {
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
    componentDidMount() {
      const jsonFilePath = require("./content/" + this.props.tickerSymb + ".txt");
        
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
