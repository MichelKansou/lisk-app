import React, { Component } from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';
import { CustomButton } from 'components/CustomButton/CustomButton';
import scanImageData from 'utilities/scanImage';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions!');
          }
        }
    }

    scanQrCode = () => {
        const {navigate} = this.props.navigation;
        navigate('BarcodeScanner');
    } 

    scanImage = async () => {
        imageResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
        });

        if (!imageResult.cancelled) {
            await scanImageData(imageResult.base64);
        }
    } 

    render() {
        
        return (
            <View style={styles.homeContainer}>
                <CustomButton 
                    onPress={this.scanQrCode} 
                    viewStyle={styles.qrCodeBtnContainer} 
                    textStyle={styles.btnText} 
                    text={'Scan QR Code'}/>
                <CustomButton 
                    onPress={this.scanImage} 
                    viewStyle={styles.qrCodeBtnContainer} 
                    textStyle={styles.btnText} 
                    text={'Scan Image'}/>
            </View>
        );
    }
}
