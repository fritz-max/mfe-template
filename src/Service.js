import React from "react";
import { Wamp, ConnectionSettings } from "./Connection";

class Service extends React.Component {
  constructor () {
    super()
    this.wamp = new Wamp()
    this.connectionSettings = new ConnectionSettings()
  }

  render() {
    return (
      <div>
        <h3>Hello Skytem! This is your new Microfrontend</h3>
        <h5>Connection:</h5> <p>{this.connectionSettings.url}, {this.connectionSettings.realm}</p>
        <h5>Subscribe to: </h5>
        {Object.keys(this.connectionSettings.subscribeTopics).map(topic => <p>{topic}</p>)}
        <h5>Publish to: </h5>
        {Object.keys(this.connectionSettings.publishTopics).map(topic => <p>{topic}</p>)}
        <h5>Available Caller Topics: </h5>
        {Object.keys(this.connectionSettings.callerTopics).map(topic => <p>{topic}</p>)}
        <h5>Available Callee Topics: </h5>
        {Object.keys(this.connectionSettings.calleeTopics).map(topic => <p>{topic}</p>)}
      </div>
    )
  }
}

export default Service;
