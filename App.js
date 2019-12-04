//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SocketIOClient from 'socket.io-client';
// create a component
class App extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('yoururl'+':3000');
  }
  _sendPing() {
    console.log('Reply from server send:', this.socket);
    //emit a dong message to socket server
    this.socket.emit('events', {test: 'test'});
  }

  _getReply() {
    this.socket.on('events', message => {
      console.log('Reply from server:' + message);
    });
    //get reply from socket server, log it to console
  }
  componentDidMount() {
    this._sendPing();
    this._getReply();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>App</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
