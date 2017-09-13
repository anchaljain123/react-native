import {StackNavigator} from 'react-navigation';
import LoginPage from './LoginPage';
import ScanList from './ScanList';
import ScanResult from './ScanResult'
import QRScan from './QRScan'
import Contact from './ContactUs'

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
        path:'/scanResult',
        navigationOptions: {
            title: 'Result',
        }
    },
    QrScan: {
        screen: QRScan
    },
    Contact: {
        screen: Contact,
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

