import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import Moment from 'moment';
import StockGraph from './StockGraph';

export default class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {getGraphButtonVisibility: true, removeGraphButtonVisibility: false, stockGraph: null};
        this.getGraph = this.getGraph.bind(this);
        this.removeGraph = this.removeGraph.bind(this);
    }

    getGraph() {
        this.setState({stockGraph: <StockGraph stockName={this.props.stockName}/>});
        this.setState({getGraphButtonVisibility: false, removeGraphButtonVisibility: true});
    }

    removeGraph() {
        this.setState({stockGraph: null});
        this.setState({getGraphButtonVisibility: true, removeGraphButtonVisibility: false});
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{this.props.stockName}  </Text></View>
                    <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{this.props.lotValue}  </Text></View>
                    <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{this.props.lotCount}  </Text></View>
                    <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{this.props.totalValue}  </Text></View>
                    <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{Moment(this.props.timestamp).format('MMM YYYY')}  </Text></View>
                    <View style={{flexDirection: 'column'}}><Text style={{fontWeight: 'bold', fontSize: 20}}>{this.props.change}</Text></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Button onPress={this.getGraph} disabled={!this.state.getGraphButtonVisibility} title="Grafiği Oluştur"/>
                    <Button onPress={this.removeGraph} disabled={!this.state.removeGraphButtonVisibility} title="Grafiği Kaldır"/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {this.state.stockGraph}
                </View>

            </View>
        );
    }
}