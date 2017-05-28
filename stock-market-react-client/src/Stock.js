import React, { Component } from 'react';
import StockGraph from './StockGraph';
import Moment from 'moment';

class Stock extends Component {

    constructor(props) {
        super();
        this.state = {getGraphButtonVisibility: true, removeGraphButtonVisibility: false, stockGraph: null};
        this.getGraph = this.getGraph.bind(this);
        this.removeGraph = this.removeGraph.bind(this);
    }

    getGraph() {
        this.setState({stockGraph: <StockGraph stockName={this.props.stockName} />});
        this.setState({getGraphButtonVisibility: false, removeGraphButtonVisibility: true});
    }

    removeGraph() {
        this.setState({stockGraph: null});
        this.setState({getGraphButtonVisibility: true, removeGraphButtonVisibility: false});
    }

    render() {
        return (
            <tbody>
            <tr>
                <td>{this.props.stockName}</td>
                <td>{this.props.lotValue}</td>
                <td>{this.props.lotCount}</td>
                <td>{this.props.totalValue}</td>
                <td>{Moment(this.props.timestamp).format('MMM YYYY')}</td>
                <td>{this.props.change}</td>
                <td>
                    <button onClick={this.getGraph} hidden={!this.state.getGraphButtonVisibility}>Grafiği Oluştur</button>
                    <button onClick={this.removeGraph} hidden={!this.state.removeGraphButtonVisibility}>Grafiği Kaldır</button>
                </td>
            </tr>
            <tr>
                <td colSpan="7">
                    {this.state.stockGraph}
                </td>
            </tr>
            </tbody>
        );
    }
}

export default Stock;