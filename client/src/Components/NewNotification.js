import React, { Component } from "react";

class NewNotification extends Component {
    constructor() {
        super();
        this.showNotification = this.showNotification.bind(this);
    }

    componentDidMount() {
        if (!("Notification" in window)) {
            console.log("Browser does not support desktop notification");
        } else {
            Notification.requestPermission();
        }
    }

    showNotification() {
        new Notification('Hello World');
        console.log("new Notification")
    }

    render() {
        return (
            <div>
                <button onClick={this.showNotification}>Show notification</button></div>
        );
    }
}

export default NewNotification;