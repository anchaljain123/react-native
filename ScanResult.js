import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Constants} from 'expo';
import QRCode from 'react-native-qrcode';

export default class ScanResult extends Component {
    render() {
        let {Data} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                {/*<View style={{flexDirection:'row',borderWidth: 1,borderColor: 'black',backgroundColor:'orange'}}>
                    <TouchableOpacity>
                        <View style={{flex: 1,  height: 40,margin:10}}>
                            <Icon name="chevron-left" size={20} style={{color: "#d6d7da"}} />
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1,height:40,alignItems:'center',justifyContent:'center'}}>
                        <Text style = {{fontWeight: 'bold'}}>Some selected item</Text>
                    </View>
                </View>*/}
                <View style={{backgroundColor: 'white', alignItems: 'center'}}>

                    <QRCode
                        value={Data}
                        size={200}
                        bgColor='black'
                        fgColor='white'/>

                    <View style={{alignItems: 'center', justifyContent: 'center', margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Cochin'}}>Personal Info</Text>
                    </View>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 0.3, marginTop: 10, alignItems: 'flex-end'}}>
                        <Text>Name</Text>
                    </View>
                    <View style={{flex: 0.7, margin: 10}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{Data.Name}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 0.3, marginTop: 10, alignItems: 'flex-end'}}>
                        <Text>Email</Text>
                    </View>
                    <View style={{flex: 0.7, margin: 10,}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{Data.Email}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row',}}>
                    <View style={{flex: 0.3, margin: 10, alignItems: 'flex-end'}}>
                        <Text>Company</Text>
                    </View>
                    <View style={{flex: 0.7, marginTop: 10}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{Data.Company}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 0.3, margin: 10, alignItems: 'flex-end'}}>
                        <Text>State</Text>
                    </View>
                    <View style={{flex: 0.7, marginTop: 10}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{Data.State}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 0.3, margin: 10, alignItems: 'flex-end'}}>
                        <Text>Country</Text>
                    </View>
                    <View style={{flex: 0.7, margin: 10}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{Data.Country}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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