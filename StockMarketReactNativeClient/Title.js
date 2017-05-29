import React, { Component } from 'react';
import {
    Text
} from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <Text style={{fontWeight: 'bold', fontSize: 30}}>
                Borsa Uygulaması
            </Text>
        );
    }
}