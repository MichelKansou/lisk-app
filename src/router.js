import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '@screens/Home/Home';
import BarcodeScanner from '@screens/BarcodeScanner/BarcodeScanner';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        BarcodeScanner: BarcodeScanner
    },
    {
        initialRouteName: 'Home',
    }
);
  
export default createAppContainer(AppNavigator);