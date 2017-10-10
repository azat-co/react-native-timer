import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
class Input extends Component {
  render() {
    return <View>
      <TextInput 
        style={{ borderColor: 'black', borderWidth: 1,
        width: 200}}
        onChangeText={this.props.onChangeText}
        value={this.props.countdownTime}
      />
      <Button onPress={()=>this.props.startCountDown(this.props.countdownTime)}
        title="Custom Timer"/>
    </View>
  }
}


export default Input