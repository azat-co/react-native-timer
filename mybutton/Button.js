import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
class MyButton extends React.Component {
  render() {
    return <Button title={`Start countdown ${this.props.time} ${((this.props.toggle)?'sec':'min')}`}
    onPress={()=>{
      if (this.props.toggle) {
        this.props.onPress(this.props.time)
      } else {
        this.props.onPress(this.props.time*60)
      }
      }}  />  
  }
}
export default MyButton