import React from 'react';
import { Video } from 'expo';
import YouTube from 'react-native-youtube';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'


export default class About extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.form}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10,color:'black'}}>About Us</Text>
                    <Text style={{color:'rgb(93, 109, 126)'}}>
                        We are a digital technology company providing end-to-end product development services.
                        We leverage the power of experience design, cutting-edge engineering and cloud to build
                        disruptive web and mobile products and enable digital transformation for businesses.
                    </Text>
                </View>

                    <Video
                        source={{ uri: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        muted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping={false}
                        style={{ height: 300,flex:1 }}
                    />
                {/*<YouTube
                    videoId="KVZ-P-ZI6W4"
                    play={true}
                    fullscreen={true}
                    loop={true}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />*/}

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
