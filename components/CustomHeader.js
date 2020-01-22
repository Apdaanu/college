import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sidebar from '../screens/Sidebar';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomHeader = props => {
  const [menu, setMenu] = useState(false);
  const {nav} = props;
  const MyButton = (
    <Icon.Button
      name="menu-fold"
      backgroundColor="#fff"
      color="#000"
      onPress={()=>setMenu(!menu)}
    >
    </Icon.Button>
  )

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.btn}>
          {MyButton}
        </View>
      </View>
        {menu ? <Sidebar nav={nav}/> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignSelf: "stretch"
  },
  menu: {
    height: 150,
  },
  btn: {
    width: 50
  }
})

export default CustomHeader;