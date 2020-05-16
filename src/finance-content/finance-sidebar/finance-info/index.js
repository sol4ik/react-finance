import React from 'react';

import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import ReactTextCollapse from'react-text-collapse';

import './finance-info.css';

export default class FinanceInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mdText: '',

            collapseOptions: {
                collapse: false,
                minHeight: 150,
                maxHeight: 330,
                collapseText: 'more ▼',
                expandText: 'less ▴',
                textStyle: {
                    padding: "5px 30%",
                    color: "#1A237E",
                    fontWeight: "bold",
                    fontSize: "20px",
                    cursor: "pointer"
                }
            }
        }
    }
    componentDidMount() {
        const mdFilePath = require('./content/' + this.props.tickerSymb + '.md');
        
        
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