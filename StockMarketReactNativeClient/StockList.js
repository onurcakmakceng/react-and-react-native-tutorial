import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Stock from './Stock';
import axios from 'axios';

export default class StockList extends Component {

    constructor(props) {
        super(props);
        this.state = {stockList: []};
        axios.get(`http://192.168.0.14:8080/stock-market-webservice/api/getLastRecordsOfAllStocks`)
            .then(res => {
                this.setState({stockList: res.data});
            });
    }

    render() {
        return (
            <View>
                {this.state.stockList.map(function(stock, index) {
                    return <Stock key={index} lotCount={stock.stockRecord.lotCount} lotValue={stock.stockRecord.lotValue}
                                  stockName={stock.stockRecord.stockName} timestamp={stock.stockRecord.timestamp}
                                  totalValue={stock.stockRecord.totalValue} change={stock.lastLotValueChange}></Stock>;
                })}
            </View>
        );
    }
}