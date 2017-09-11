import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Constants} from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            ScanResults : []
        }
    }

    updateState = (scan) => {
        scan = JSON.parse(scan.data);
        scan.date = Date.now();
        let ScanResults = [...this.state.ScanResults];
        ScanResults.push(scan);
        this.setState({ScanResults});
    };

    render() {
        return (
            <View style={styles.container}>
              {/*  <View style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: 'black',
                    flex: 1,
                    backgroundColor: 'orange'
                }}>
                    <View style={{flex: 1, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 15}}>Your Scans</Text>
                    </View>
                </View>*/}
                <View style={{borderWidth: 1, borderColor: 'black', flex: 9, flexDirection: 'row'}}>
                    <FlatList
                        keyExtractor={(item, index) => index}
                        data={this.state.ScanResults}
                        renderItem={({item, index}) => (
                            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Scanned',{Data:item})}>
                            <View style={{
                                backgroundColor: 'white',
                                borderBottomColor: 'black',
                                flexDirection: 'row',
                                borderBottomWidth: 1
                            }}>
                                <View style={{
                                    height: 40,
                                    backgroundColor: '#CEB5ED',
                                    borderRadius: 10,
                                    margin: 10,
                                    flex: 3
                                }}>
                                </View>
                                <View style={{flex: 10, margin: 10, flexDirection: 'column'}}>
                                    <Text>{item.Name}</Text>
                                    <Text>{item.date}</Text>
                                </View>
                                <View style={{margin: 10, flex: 3,alignItems:'flex-end'}}>
                                    <TouchableHighlight onPress={() =>this.props.navigation.navigate('Scanned',{Data:item})}>
                                        <Icon name="chevron-right" size={25} style={{color: "#d6d7da"}}/>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={styles.floatingButton}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('QrScan',{updateState: this.updateState})}>
                    <View style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
                        <Text>QR Scan </Text>
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
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    floatingButton: {
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgb(174, 214, 241)',
    },
});
