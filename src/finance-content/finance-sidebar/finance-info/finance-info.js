import React from 'react';

import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import ReactTextCollapse from'react-text-collapse';

import './finance-info.css';

export default class FinanceInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'S&P 500 index',
            text: 'The S&P 500, or simply the S&P, (ticker symbol ^GSPC) is a stock market index that measures the stock performance of 500 large companies listed on stock exchanges in the United States. It is one of the most commonly followed equity indices, and many consider it to be one of the best representations of the U.S. stock market. The average annual total return of the index, including dividends, since inception in 1926 has been 9.8%; however, there were several years where the index declined over 30%.The index has posted annual increases 70% of the time.',
            
            mdFile: './content/gspc.md',
            mdText: '',

            collapseOptions: {
                collapse: false,
                minHeight: 150,
                maxHeight: 350,
                collapseText: 'more ▼',
                expandText: 'less ▴',
                textStyle: {
                    padding: "10px 30%",
                    color: "#1A237E",
                    fontWeight: "bold",
                    fontSize: "20px",
                    cursor: "pointer"
                }
            }
        }
    }
    componentDidMount() {
        // !!!
        const mdFilePath = require('./content/gspc.md');
        
        
        fetch(mdFilePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              mdText: marked(text)
            })
          })
      }
    render() {
        return(
            <div className="finance-info-box">
                <div className="info-box-text">
                    <ReactTextCollapse options={this.state.collapseOptions}>
                        <ReactMarkdown
                            source={this.state.mdText}
                            escapeHtml={false}
                        />
                    </ReactTextCollapse>
                </div>
            </div>
        );
    }
}