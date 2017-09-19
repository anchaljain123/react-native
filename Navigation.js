import { StackNavigator } from 'react-navigation';
import LoginPage from './LoginPage';
import ScanList from './ScanList';
import ScanResult from './ScanResult'
import QRScan from './QRScan'
import Contact from './ContactUs'
import About from './About'

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
        path: 'scanResult/:user',
        navigationOptions: {
            title: 'Result',
        }
    },
    QrScan: {
        screen: QRScan
    },
    Contact: {
        screen: Contact,
    },
    About: {
        screen: About
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

