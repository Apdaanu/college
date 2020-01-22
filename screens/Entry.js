import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { gstyles } from '../styles/global';

const Entry = props => {

  const [username, setUSername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getLoggedInInfo();
  }, [])

  async function getLoggedInInfo(){
    try {
      const value = await AsyncStorage.getItem('loggedinUser')
      if(value !== null) {
        props.navigation.navigate("OGT");
      }
    }catch(e) {
      // error reading value
    }
  }

  async function getUsers(){
    try {
      const value = await AsyncStorage.getItem('users')
      return value;
    }catch(e) {
      throw e;
    }
  }

  function authLogin(){
    let login = false;
    getUsers().then(function(users){
      if(users !== null){
        users.map(function(item){
          if(item.username === username && item.password === password)
            login = true;
        })
      }
    }).catch(function(err){console.log(err)})
    return login;
  }

  function login(){
    if(authLogin())
      props.navigation.navigate("OGT");
    else  
      alert("Unauthorized login");
  }

  return(
    <View style={[styles.wrapper, gstyles.alignCenter]}>
      <View style={[gstyles.justifyCenter, gstyles.flex1, styles.container]}>
        <View style={[styles.head, gstyles.justifyCenter, gstyles.alignCenter, {paddingBottom: 25}]}>
          <Text style={gstyles.font18}>Welcome to Prototype1</Text>
          <Text style={[gstyles.colorGreen, gstyles.font15]}>Easy suppy chain management</Text>
        </View>
        <View>
          <View style={{marginBottom: 25}}>
            <TextInput placeholder="Username" style={styles.ip} onChangeText={text=>{setUSername(text)}}/>
            <TextInput placeholder="Password" secureTextEntry style={styles.ip} onChangeText={text=>setPassword(text)}/>
          </View>
          <View style={{marginBottom: 25}}>
            <Button title="Login" color="#000" onPress={login}/>
          </View>
        </View>
        <View style={gstyles.alignCenter}>
          <Text>New to app? <Text style={gstyles.colorGreen} onPress={()=>{props.navigation.navigate("Signup")}}>Signup.</Text></Text>
        </View>
        {/* <Text>{username}</Text> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
  },
  head: {
    // height: ,
  },
  ip: {
    borderBottomWidth: 1,
    borderColor: "#000",
    marginVertical: 5
  },
  container: {
    width: "60%",
  }
})

export default Entry;