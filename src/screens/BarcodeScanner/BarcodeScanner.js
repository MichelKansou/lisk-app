import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            scanned: false
        };
    }

    // check and ask for Camera Permission
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    // handle scan result 
    handleBarCodeScanned = async ({ data }) => {  
        if (data) {
            this.setState({ scanned: true });
            Alert.alert(
                'Qr Code found !',
                `Result : ${data}`,
                [
                  {text: 'OK', onPress: () => this.props.navigation.pop()},
                ],
                {cancelable: false},
              );
        }
    }

    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View style={{ flex: 1 }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />
            </View>
        );
    }
}