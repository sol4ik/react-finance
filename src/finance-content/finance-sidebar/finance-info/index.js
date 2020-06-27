import React from 'react';

import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import ReactTextCollapse from'react-text-collapse';

import './finance-info.css';

import { connect } from 'react-redux';
import { changeTickerSymbol } from '../../../actions/action-creators';

import equal from 'fast-deep-equal';

class FinanceInfo extends React.Component {
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
    updateInfo() {
        const mdFilePath = require('./content/' + this.props.tickerSymbol + '.md');
        
        
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

    componentDidMount() {
        this.updateInfo();
    }
    componentDidUpdate(prevProps) {
        if (!equal(this.props.tickerSymbol, prevProps.tickerSymbol)) {
          this.updateInfo();
        }
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

const mapStateToProps = (state, ownProps) => ({
    tickerSymbol: state.tickerSymbol
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeTickerSymbol: (tickerSymbol) => dispatch(changeTickerSymbol(tickerSymbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(FinanceInfo);
