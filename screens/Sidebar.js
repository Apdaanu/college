import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { gstyles } from '../styles/global';
import {setLoggedInInfo} from "../global/global";

const MenuItem = props => {
  return(
    <View style={styles.item}>
      <Text style={[gstyles.font15]} onPress={()=>props.nav(props.navTo)}>{props.text}</Text>
    </View>
  )
}

const Sidebar = (props) => {
  const MyButton = (
    <Icon.Button
      name="user-circle"
      backgroundColor="#f5f5f5"
      color="#000"
      onPress={()=>nav("Profile")}
    >
    </Icon.Button>
  )
  const nav = props.nav.navigate;

  function logout(){
    setLoggedInInfo("false").then(function(){
      nav("Entry");
    })
  }

  return(
    <View style={styles.container} >
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <View >
            {MyButton}
          </View>
          <View style={{alignItems: "center", flex: 1, marginRight: 50}}>
            <Text style={gstyles.font16}>Prototype1</Text>
          </View>
        </View>
        <View>
          <MenuItem text={"Home"} nav={nav} navTo={"OGT"}/> 
          <MenuItem text={"Post for sale"} nav={nav} navTo={"PostForSale"}/> 
          <MenuItem text={"Past Transactions"} /> 
          <MenuItem text={"Crop MSP"} nav={nav} navTo={"CropMSP"}/>
          <MenuItem text={"Offers"} nav={nav} navTo={"Offers"}/>
          <MenuItem text={"Complaints"} nav={nav} navTo={"Complaints"}/>
          <MenuItem text={"eKYC"} nav={nav} navTo={"Complaints"}/>
          <MenuItem text={"Settings"} nav={nav} navTo={"Complaints"}/>
          <MenuItem text={"Logout"} nav={logout} navTo={true}/>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={()=>props.setMenu(false)}>
        <View style={styles.close}/>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    elevation: 4
  },
  wrapper: {
    zIndex: 2,
    backgroundColor: "#fff",
    height: "100%",
    width: "75%",
  },
  close: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "100%",
  },
  item: {
    paddingVertical: 10,
    paddingLeft: 10
  },
  head: {
    height: 50,
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    alignItems: "center",
  }
})

export default Sidebar;