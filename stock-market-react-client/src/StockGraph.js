import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

class StockGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {graphData: []};
        axios.get(`http://localhost:8080/stock-market-webservice/api/getAllRecordsOfStock/` + this.props.stockName)
            .then(res => {
                this.setState({graphData: res.data});
            });
    }

    render() {
        return (
            <LineChart width={600} height={300} data={this.state.graphData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dot={false} dataKey="lotValue" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
            </LineChart>
        );
    }
}

export default StockGraph;
