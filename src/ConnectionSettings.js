const config = require("../config.json");

class Connection {
    constructor() {
        this.url = "ws://"+config.router+":8080/ws"
        this.realm = "realm"
        this.subscribeTopics = []
        this.publishTopics = []

        config.subscribeTopics.forEach(topic => {
            this.subscribeTopics.push("com.skytem/"+topic)
        })

        config.publishTopics.forEach(topic => {
            this.publishTopics.push("com.skytem/"+topic)
        })
    }
}

export default Connection