import {StackNavigator} from 'react-navigation';
import LoginPage from './LoginPage';
import ScanList from './ScanList';
import ScanResult from './ScanResult'
import QRScan from './QRScan'

const stackRoutes = {
    Login: {
        screen: LoginPage,
        navigationOptions: {
            title: 'Login',
        }
    },
    ScanList: {
        screen: ScanList,
        navigationOptions: {
            title: 'Your Scans',
        }
    },
    Scanned: {
        screen: ScanResult,
        navigationOptions: {
            title: 'Result',
        }
    },
    QrScan: {
        screen: QRScan
    }
};

export default StackNavigator(stackRoutes, {
    initialRouteName: 'Login',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'orange',
        }
    }
});

