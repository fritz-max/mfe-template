import React from "react";
import ConnectionSettings from "./ConnectionSettings";

class Service extends React.Component {
  constructor () {
    super()
    this.connectionSettings = new ConnectionSettings()
  }

  render() {
    return (
      <div>
        <h3>Hello Skytem! This is your new Microfrontend</h3>
        <h5>Connection:</h5> <p>{this.connectionSettings.url}, {this.connectionSettings.realm}</p>
        <h5>Subscribe to: </h5>
        {this.connectionSettings.subscribeTopics.map(topic => <p>{topic}</p>)}
        <h5>Publish to: </h5>
        {this.connectionSettings.publishTopics.map(topic => <p>{topic}</p>)}
      </div>
    )
  }
}

export default Service;
