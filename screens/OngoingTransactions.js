import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Sidebar from '../screens/Sidebar';
import {gstyles} from "../styles/global"

/*card:
  1. Name of buyer
  2. Crop amount
  3. Picked up on
  4. Tracking status (if payment not recieved)
*/

const OngoingTransactions = props => {
  const [menu, setMenu] = useState(false);
  const MyButton = (
    <Icon.Button
      name="menu-fold"
      backgroundColor="#fff"
      color="#000"
      onPress={()=>setMenu(!menu)}
    >
    </Icon.Button>
  )

  function handleCloseSidebar(){
    if(menu){
      setMenu(!menu);
    }
  }

  return(
    <View>
      <View style={[styles.container, gstyles.elev4]}>
      <View style={[styles.menu, gstyles.alignCenter, {paddingRight: 50}]}>
        <View style={[styles.btn]}>
          {MyButton}
        </View>
        <View style={[gstyles.alignCenter, {flex: 1}]}>
          <Text style={gstyles.font18}>Prototype1</Text>
        </View>
      </View>
    </View>
      <View style={[styles.main, gstyles.pV20]} onPress={handleCloseSidebar}>
        <Text style={gstyles.pH10}>No active transactions currently.</Text>
      </View>
      {menu ? <Sidebar nav={props.navigation} setMenu={setMenu} menu={menu}/> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
  },
  menu: {
    height: 50,
    flexDirection: "row",
  },
  btn: {
    width: 50
  },
  main: {
    height: "100%",
  }
})

export default OngoingTransactions;