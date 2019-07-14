import React from 'react';
import renderer from 'react-test-renderer';
import { BarCodeScanner } from 'expo';

import BarcodeScannerScreen from './BarcodeScanner';


describe('Testing BarcodeScanner Screen', () => {
  let wrapper;
  const mockPopNavigationFn = jest.fn().mockName('mockedFunction');

  beforeEach(() => {
    const navigation = { pop: mockPopNavigationFn };
    wrapper = renderer.create(<BarcodeScannerScreen navigation={navigation} />);
  });

  it('Renders BarcodeScanner with requesting permission', () => {
    const barcodeScannerInstance = wrapper.getInstance();

    
    expect(wrapper.toJSON().children[0]).toBe('Requesting for camera permission');
    expect(barcodeScannerInstance.state.hasCameraPermission).toBe(null);
    expect(barcodeScannerInstance.state.scanned).toBe(false);
  });

  it('Renders BarcodeScanner with unauthorized permission', () => {
    const barcodeScannerInstance = wrapper.getInstance();

    barcodeScannerInstance.setState({hasCameraPermission: false});

    expect(wrapper.toJSON().children[0]).toBe('No access to camera');
    expect(barcodeScannerInstance.state.hasCameraPermission).toBe(false);
    expect(barcodeScannerInstance.state.scanned).toBe(false);
  });

  it('Renders BarcodeScanner with authorized permission', () => {
    const barcodeScannerInstance = wrapper.getInstance();

    barcodeScannerInstance.setState({hasCameraPermission: true});

    expect(wrapper.root.findByType(BarCodeScanner)).toBeDefined();
  });


  it('Handle BarCode Scan result', async () => {
    const barcodeScannerInstance = wrapper.getInstance();

    barcodeScannerInstance.setState({hasCameraPermission: true});

    expect(wrapper.root.findByType(BarCodeScanner)).toBeDefined();

    await barcodeScannerInstance.handleBarCodeScanned({ data : 'test'});

    expect(barcodeScannerInstance.state.scanned).toBe(true);
  });
});