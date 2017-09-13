import React from 'react';
import {MapView, Location, Permissions} from 'expo';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'


export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            feedback: '',

        };
    }

       async componentWillMount() {
                let { status } = await Permissions.askAsync(Permissions.LOCATION);
           if (status === 'granted') {
               let location = await Location.getCurrentPositionAsync(
                   {
                       enableHighAccuracy: true, timeout:5000, maxiumumAge: 10000
                   });

               var lat = parseFloat(location.coords.latitude);
               var long = parseFloat(location.coords.longitude);
               var region = {
                   latitude: lat,
                   longitude: long,
                   latitudeDelta: 0.0922,
                   longitudeDelta: 0.0922
               };
               this.setState({ positionState: region });

           } else {
               throw new Error('Location permission not granted');
           }

        }

    saveForm = () => {
        //save
        this.setState({
            email: '',
            feedback: ''
        })
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.form}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>FeedBack Form</Text>
                    <Text>Email:</Text>
                    <TextInput style={styles.input}
                               maxLength={40}
                               keyboardType={'email-address'}
                               onChangeText={(text) => this.setState({email: text})}
                    />
                    <Text>Feedback:</Text>
                    <TextInput style={styles.input}
                               numberOfLines={4}
                               multiline={true}
                               onChangeText={(text) => this.setState({feedback: text})}
                    />
                    <TouchableOpacity onPress={() => this.saveForm()}>
                        <Text style={styles.button}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <MapView
                    style={{flex: .6}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        longitudeDelta: 0.2,
                        latitudeDelta: 0.2
                    }}
                    region={this.state.positionState}>
                    <MapView.Marker coordinate={{longitude: 77.3910265, latitude: 28.5355161}} title={'TOTHENEW'}/>
                </MapView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250,
        borderRadius: 50
    },
    form: {
        flex: .4,
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250
    }
});
