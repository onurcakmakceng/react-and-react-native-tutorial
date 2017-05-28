import React, { Component } from 'react';
import Stock from './Stock';
import axios from 'axios';

class StockList extends Component {

    constructor(props) {
        super();
        this.state = {stockList: []};
        axios.get(`http://localhost:8080/stock-market-webservice/api/getLastRecordsOfAllStocks`)
            .then(res => {
                this.setState({stockList: res.data});
            });
    }

    render() {
        return (
            <table>
                {this.state.stockList.map(function(stock, index) {
                    return <Stock key={index} lotCount={stock.stockRecord.lotCount} lotValue={stock.stockRecord.lotValue}
                                  stockName={stock.stockRecord.stockName} timestamp={stock.stockRecord.timestamp}
                                  totalValue={stock.stockRecord.totalValue} change={stock.lastLotValueChange}></Stock>;
                })}
            </table>
        );
    }
}

export default StockList;
