import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }


    scanQrCode = () => {
        const {navigate} = this.props.navigation;
        navigate('BarcodeScanner');
    } 

    render() {
        
        return (
            <View style={styles.homeContainer}>
                <TouchableOpacity
                    onPress={this.scanQrCode}>
                    <View style={styles.qrCodeBtnContainer}>
                        <Text style={styles.btnText}>
                            Scan
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
