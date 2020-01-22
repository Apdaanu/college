import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {gstyles} from "../styles/global";
import Icon from 'react-native-vector-icons/FontAwesome';


//Put search bar.

/* Card: 
  1. Crop name
  2. Price
*/

const crops = [
  {"Paddy":"1815"},
  {"Jowar":"2550"},
  {"Bajra":"1080"},
  {"Maize":"3250"},
  {"Ragi":"2890"},
  {"Arhar":"1030"},
  {"Moong":"1230"},
  {"Urad":"2785"},
  {"Cotton":"3606"},
  {"Groundnut in Shell":"5436"},
  {"Sunflower Seed":"1800"},
  {"Soyabeen":"1200"},
  {"Sesamum":"1090"},
  {"Nigerseed":"2300"},
]

const Card = props => {
  const {item} = props;
  const key = Object.getOwnPropertyNames(item);
  return(
    <View style={styles.item}>
      <Text style={gstyles.font16}>{key}</Text>
      <Text style={gstyles.font16}>{item[key]}</Text>
    </View>
  )
}

const CropMSP  = () => {
  const renderCrops = crops.map((item, index)=>{
      return <Card item={item} key={index}/>
    })

  return (
    <View style={styles.container}>
      <View>
        <View style={[gstyles.bgWhite, gstyles.row, gstyles.justifyBw, gstyles.pH25, gstyles.pV15, gstyles.borderB, gstyles.borderBlack]}>
          <Text style={gstyles.font18}>Crop name</Text>
          <View style={[gstyles.row, gstyles.alignCenter]}>
            <Icon name="rupee" size={18}/>
            <Text style={gstyles.font18}> / Quintal</Text>
          </View>
        </View>
        {renderCrops}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  item: {
    flexDirection: "row",
    paddingVertical: 10,
    borderColor: "rgba(180, 180, 180, 1)",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: 25
  }
})

export default CropMSP;