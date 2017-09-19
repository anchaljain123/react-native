import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Alert , Image} from 'react-native';
import {Constants, Facebook} from 'expo';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false
        }
    }

    async _onPressButton() {
        const {type, token} = await Facebook.logInWithReadPermissionsAsync('1228027190676210', {
            permissions: ['public_profile','email', 'user_friends', 'user_photos'],
        });
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?
            fields=id,name,email&&access_token=${token}`);
            Alert.alert(
                'Logged in!',
                `Hi ${(await response.json()).name}!`,
            );
                this.props.navigation.navigate('ScanList')
        }
    }


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
                <View style={{height: 150,  margin: 40,borderRadius: 90,
                    alignItems:'center',justifyContent:'center'}}>
                    <Image  source={require('./assets/icons/logo.png')} resizeMode={'center'}/>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <TouchableHighlight underlayColor="white" onPress={() => this._onPressButton()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Login With Facebook</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={() => navigate('ScanList')}>
                        <View>
                            <Text style={{alignSelf: 'center'}}>Skip this step</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,marginTop:20,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={() => navigate('Contact')} >
                        <View style ={{}}>
                            <Text style={{color: '#2196F3'}}>Contact Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('About')} style={{marginTop:20}} >
                            <Text style={{color: '#2196F3'}}>About Us</Text>
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
        borderRadius: 15
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});