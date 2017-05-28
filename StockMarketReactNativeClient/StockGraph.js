import React, { Component } from 'react';
import { View} from 'react-native';

import { StockLine } from 'react-native-pathjs-charts'
import axios from 'axios';

export default class StockGraph extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `StockLine - Basic`,
    });

    constructor(props) {
        super(props);
        this.state = {graphData: [{"timestamp":0,"stockName":"ASELS","lotCount":5735352,"lotValue":0,"totalValue":6.8193336E7}]};
        axios.get(`http://192.168.0.14:8080/stock-market-webservice/api/getAllRecordsOfStock/` + this.props.stockName)
            .then(res => {
                this.setState({graphData: res.data});
            });
    }

    render() {
        let options = {
            width: 350,
            height: 200,
            color: '#2980B9',
            margin: {
                top: 10,
                left: 35,
                bottom: 30,
                right: 10
            },
            animate: {
                type: 'delayed',
                duration: 200
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'bottom',
                tickValues: [],
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E'
                }
            },
            axisY: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'left',
                tickValues: [],
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E'
                }
            }
        }

        return (
            <View>
                <StockLine data={[this.state.graphData]} options={options} xKey='timestamp' yKey='lotValue' />
            </View>
        )
    }
}