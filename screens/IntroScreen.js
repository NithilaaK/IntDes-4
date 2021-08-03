import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default class IntroScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")}
        style={{
          width: 405,
          height: 249,
        }}/>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
                this.props.navigation.navigate("LoginScreen")
            }}>
            <Text
            style={{
              color: "#ffffff",
              textAlign: 'center',
            }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
                this.props.navigation.navigate("SignUpScreen2")
            }}>
            <Text style={{
              color: "#ffffff",
              textAlign: 'center',
            }}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#000000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  button2: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#000000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginBottom: 53
  },
  buttonContainer: {
    flex: 1,
  },
});
