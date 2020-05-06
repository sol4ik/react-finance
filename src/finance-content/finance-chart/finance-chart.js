import React from 'react';
import {Line} from 'react-chartjs-2';

import './finance-chart.css';


export default class FinanceChart extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'S&P 500 index',
            subtitle: 'subtitle on the timeperiod of data goes here',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                  {
                    label: 'S&P 500 Index',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
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
