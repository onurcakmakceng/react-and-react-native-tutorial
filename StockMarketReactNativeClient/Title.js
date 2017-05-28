import React, { Component } from 'react';
import {
    Text
} from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <Text style={{fontWeight: 'bold'}}>
                Exchange App React Client
            </Text>
        );
    }
}