import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '@screens/Home';
import BarcodeScanner from '@screens/BarcodeScanner';

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