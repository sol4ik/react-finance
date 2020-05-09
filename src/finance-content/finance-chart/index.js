import React from 'react';
import {Line} from 'react-chartjs-2';

import './finance-chart.css';


export default class FinanceChart extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'S&P 500 index',
            subtitle: 'based on random data',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                  {
                    label: 'S&P 500 Index',
                    fill: false,
                    lineTension: 0.,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#4a26fd',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#4a26fd',
                    pointBackgroundColor: '#4a26fd',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#0000e4',
                    pointHoverBorderColor: '#0000e4',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40, 42, 12, 13, 14, 15]
                  }
                ],
              },
            options: {
                legend: {
                    display: false
                }
            }
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
