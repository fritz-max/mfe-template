import React from "react";
import Connection from "./ConnectionSettings";

class Service extends React.Component {
  constructor () {
    super()
    this.connection = new Connection()
  }

  render() {
    return (
      <div>
        <h3>Hello Skytem! This is your new Microfrontend</h3>
        <h5>Connection:</h5> <p>{this.connection.url}, {this.connection.realm}</p>
        <h5>Subscribe to: </h5>
        {this.connection.subscribeTopics.map(topic => <p>{topic}</p>)}
        <h5>Publish to: </h5>
        {this.connection.publishTopics.map(topic => <p>{topic}</p>)}
      </div>
    )
  }
}

export default Service;
