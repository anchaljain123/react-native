import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import {Constants} from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ScanResults: []
        }
    }

    // componentWillMount(){
    //     fetch('url').then(res => res.json()).then(res=>res.json)
    // .then(async scans => {
    // try {
    // const value = await AsyncStorage.getItem('@MySuperStore');
    // if (value !== null){this.setState({ScanResults:value})}
    //    }catch (error) {console.log(err)}
    // }).catch(err => console.log(err) )}

    updateState = (scan) => {
        let today = new Date(),
            scanObj = Object.assign({},scan,{Date:today.toLocaleString()}),
          ScanResults = [...this.state.ScanResults];

        ScanResults.push(scanObj);
        this.setState({ScanResults});

        AsyncStorage.setItem('@MySuperStore', ScanResults)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log("err",err))

        // fetch('url',{
        //     method: 'POST',
        //     body: JSON.stringify(scanObj),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then(res=>res.json()).
        // then(async data =>{
        // try {
        // await  AsyncStorage.setItem('@MySuperStore', data)
        // }
        //  catch(err) {console.log(err)}
        // })
        // .catch(err => console.log(err))
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
                                    <Text>{item.Date}</Text>
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

                <TouchableOpacity style={styles.floatingButton} onPress={() => this.props.navigation.navigate('QrScan',{updateState: this.updateState})}>
                    <Text>QR Scan </Text>
                </TouchableOpacity>

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
        alignItems:'center',
        justifyContent:'center'
    },
});
