import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {BarCodeScanner, Permissions, Constants} from 'expo';

export default class QRScan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: false
        }
    }

    async componentWillMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        if (status === 'granted')
            this.setState({hasCameraPermission: true});
    };


    _handleBarCodeRead = (scan) => {
        const {goBack} = this.props.navigation;

        this.setState({hasCameraPermission: false}, () => {
            this.props.navigation.state.params.updateState(JSON.parse(scan.data));
            goBack();
        });

    };

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.hasCameraPermission &&
                    <View style={{flex: 1, height: 400, width: 400}}>
                        <BarCodeScanner
                            onBarCodeRead={this._handleBarCodeRead}
                            style={StyleSheet.absoluteFill}
                        />
                    </View>
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 15
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});