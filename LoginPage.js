import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableHighlight,TouchableOpacity,WebView,Alert } from 'react-native';
import { Constants,Facebook } from 'expo';

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            check : false
        }
    }
    async  _onPressButton() {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync('1228027190676210', {
            permissions: ['public_profile'],
            // behavior: 'native'
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`);
           this.props.navigation.navigate('ScanList')
        }
    }
    // _onPressButton = () => {
    //     this.setState({check: true})
    // };

    render() {
     /*   if(this.state.check){
            return(
               {/!* <WebView
                    source={{uri: 'https://www.facebook.com/'}}
                    style={{marginTop: 20}}
                />*!/}
            );
        }else {*/
            const {navigate} = this.props.navigation;
            return (
                <View style={styles.container}>

                    <View style={{width: 160,height: 160, backgroundColor: 'white',borderRadius:90,margin:40}}></View>
                    <View style={{alignSelf: 'center'}}>
                        <TouchableHighlight  underlayColor="white" onPress={() => this._onPressButton()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Login With Facebook</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableOpacity  onPress={() =>navigate('ScanList')}>
                            <View>
                                <Text style={{ alignSelf:'center'}}>Skip this step</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        borderRadius:15
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});