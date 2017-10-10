import React, {Component} from 'react';
import { Switch, Button, StyleSheet, Text, View, TextInput } from 'react-native';

import MyButton from './mybutton/Button.js';
import MyInput from './myinput/Input.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString(),
      countdown: 10,
      intervalReference: null,
      originalCountdown: 0,
      toggle: true
    }
    setInterval(()=>{
      this.setState({time: new Date().toLocaleTimeString()})
    }, 1000)
    this.startCountDown = this.startCountDown.bind(this)
    this.pause = this.pause.bind(this)
    this.resume = this.resume.bind(this)
    this.reset = this.reset.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  pause() {
    clearInterval(this.state.intervalReference)
  }
  resume() {
    // console.log(this.state)
    this.startCountDown(this.state.countdown)
  }
  reset() {
    clearInterval(this.state.intervalReference)
    this.startCountDown(this.state.originalCountdown)
  }
  startCountDown(countdownTime=this.state.countdown) {
    clearInterval(this.state.intervalReference)
    console.log(`you pressed ${countdownTime}`)
    this.setState({countdown: countdownTime, originalCountdown: countdownTime}, ()=>{
      let intervalReference = setInterval(()=>{
        this.setState({countdown: --this.state.countdown})
      }, 1000)
      this.setState({intervalReference: intervalReference})
    })
  }
  toggle() {
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    return (
      <View style={styles.container}>        
        <Text>Hello Newegg!!!!!!!!</Text>
        <Text>Time is {this.state.time}</Text>
        <MyInput countdownTime={this.state.countdownTime} onChangeText={(value)=>{this.setState({countdownTime: value})}} startCountDown={this.startCountDown}/>
        <MyButton time={5} onPress={this.startCountDown} toggle={this.state.toggle}></MyButton>
        <MyButton time={10} onPress={this.startCountDown} toggle={this.state.toggle}></MyButton>
        <MyButton time={15} onPress={this.startCountDown} toggle={this.state.toggle}></MyButton>
        <Button onPress={this.pause} title="pause"/>
        <Button onPress={this.resume} title="resume"/>
        <Button onPress={this.reset} title="Reset"/>
        <Switch onValueChange={this.toggle}  value={this.state.toggle}></Switch>
        <Text>{(this.state.toggle)?'sec':'min'}</Text>
        <Text style={{fontSize:48}}>Countdown: {this.state.countdown}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
