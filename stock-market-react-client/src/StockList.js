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
                <tbody>
                    <tr>
                        <td><h4>Hisse Adı  &emsp;</h4></td>
                        <td><h4>Hisse Değeri (TL) &emsp;</h4></td>
                        <td><h4>Hisse Sayısı  &emsp;</h4></td>
                        <td><h4>Toplam Değer (TL) &emsp;</h4></td>
                        <td><h4>Kayıt Tarihi  &emsp;</h4></td>
                        <td><h4>Değişim  &emsp;</h4></td>
                        <td></td>
                    </tr>
                </tbody>


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
