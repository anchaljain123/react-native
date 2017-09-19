import React, {Component} from 'react';
import Navigation from './Navigation'
import {Permissions, Notifications} from 'expo';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: {}
        }
    }

    componentWillMount() {
        this.registerForPushNotificationsAsync();
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = (notification) => {
        this.setState({notification}, () => {
            console.log(this.state.notification)
        });
    };

    async registerForPushNotificationsAsync() {
        const {existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            return;
        }
        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token)
    }

    render() {
        return (
            <Navigation/>
        );
    }
}
