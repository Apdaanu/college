import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, StyleSheet } from 'react-native';
import { gstyles, color } from '../styles/global';
import { TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import user from "../models/user";

const Signup = props => {
  
  const [step, setStep] = useState(0);
  const [username, setUSername] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");

  const steps = [
    "Create your acount",
    "These are the generated keys",
    "Start the eKYC process."
  ];

  const LeftBtn = (
    <Icon.Button
      name="left"
      backgroundColor="#fff"
      color={color.green}
      size={14}
      onPress={()=>setStep(step-1)}
    >
    </Icon.Button>
  );

  const RightBtn = (
    <Icon.Button
      name="right"
      backgroundColor="#fff"
      color={color.green}
      size={14}
      onPress={handleNext}
    >
    </Icon.Button>
  )

  const CheckBtn = (
    <Icon.Button
      name="check"
      backgroundColor="#fff"
      color={color.green}
      size={14}
      onPress={createUser}>
    >
    </Icon.Button>
  )

  function renderBody(){
    if(step === 0){
      return (
        <View style={[{width: "60%"}]}>
          <View>
            <TextInput placeholder="Username" style={styles.ip} onChangeText={text=>{setUSername(text)}}/>
            <TextInput placeholder="Password" style={styles.ip} onChangeText={text=>{setPassword(text)}} secureTextEntry/>
            <TextInput placeholder="Confirm Password" style={styles.ip} onChangeText={text=>{setRePass(text)}} secureTextEntry/>
          </View>
          <View style={[gstyles.alignCenter, gstyles.pV15]}>
            <Text>Already have an account? <Text style={gstyles.colorGreen} onPress={()=>props.navigation.navigate("Entry")}>Login</Text></Text>
          </View>
        </View>
      )
    }
    else if(step === 1){
      return(
        <View style={[gstyles.alignCenter]}>
          <Text style={gstyles.font16}>The following are your keys</Text>
          <View style={[gstyles.pV25,{width: "80%"}]}>
          <View style={[gstyles.alignCenter, styles.keyView]}>
            <Text style={[gstyles.font16, gstyles.fontBold]}>Public Key</Text>
            <Text>c040e1c3a2e1cb69c2a5ad7f471c8c36dccfdf25d7cb3f09c4932485b23217ec</Text>
          </View>
          <View style={[gstyles.alignCenter,styles.keyView, gstyles.mV25]}>
            <Text style={[gstyles.font16, gstyles.fontBold]}>Private Key</Text>
            <Text>5f904136bb28a28771acb40732d3909ca7aea2234c5288d7eb83118d168e47da</Text>
          </View>
          <View style={gstyles.alignCenter}>
            <Text style={[gstyles.colorRed, gstyles.fontBold, gstyles.font15]}>Caution: Never tell your private key to anyone.</Text>
          </View>
          </View>
        </View>
      )
    }
    else if(step === 2){
      return(
        <View>
          <Text>eKYC will be added later</Text>
        </View>
      )
    }
  }

  function handleNext(){
    if(step === 0){
      if(username.trim().length === 0 || password.trim().length === 0 || rePass.trim().length === 0)
        return false;
      if(password.trim() !== rePass.trim())
        return false;
      
      setStep(step+1);
    }
    if(step === 1)
      setStep(step+1)
  }

  function createUser(){
    let newUser = user;
    newUser.username = username;
    newUser.password = password;
    newUser.priK = "5f904136bb28a28771acb40732d3909ca7aea2234c5288d7eb83118d168e47da";
    newUser.pubK = "c040e1c3a2e1cb69c2a5ad7f471c8c36dccfdf25d7cb3f09c4932485b23217ec";

    setUSer(JSON.stringify(newUser)).then(function(res){
      console.log("new user created!");
    })
    .catch(function(err){console.log(err)})
  }

  return(
    <View style={[gstyles.flex1, gstyles.bgWhite]}>
      <View style={gstyles.flex1}>
        <View style={[gstyles.alignCenter, styles.head]}>
          <View>
            <Text style={[gstyles.font18]}>Signup</Text>
          </View>
          <View>
            <Text style={[{color: "#757575"}, gstyles.font16, gstyles.colorGreen]}>{steps[step]}</Text>
          </View>
        </View>
        <View style={[gstyles.flex1, gstyles.alignCenter, gstyles.justifyCenter]}>
          {renderBody()}
        </View>
        <View style={[gstyles.row, gstyles.justifyBw, gstyles.alignCenter, gstyles.pH25,styles.footer]}>
            {step > 0 ? <TouchableOpacity onPress={()=>setStep(step-1)} >
              <View style={[gstyles.row, gstyles.alignCenter]}>
                {LeftBtn}
                <Text style={[gstyles.colorGreen]} onPress={()=>setStep(step-1)}>Back</Text>
              </View>
            </TouchableOpacity> : <View></View>}
            {step < steps.length-1 ? <TouchableWithoutFeedback onPress={()=>alert("hi")}>
              <View style={[gstyles.row, gstyles.alignCenter]}>
                <Text style={[gstyles.colorGreen]} onPress={handleNext}>Next</Text>
                {RightBtn}
              </View>
            </TouchableWithoutFeedback> : 
            <View style={[gstyles.row, gstyles.alignCenter]}>
              <Text style={gstyles.colorGreen} onPress={createUser}>Finish</Text>
              {CheckBtn}
              </View>}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    paddingTop: 25
  },
  footer: {
    height: 100
  },
  ip: {
    borderBottomWidth: 1,
    borderColor: "#575757",
    marginVertical: 5
  },
  keyView: {
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    padding: 20
  }
})

export default Signup;