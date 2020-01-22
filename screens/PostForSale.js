import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

/*Fields
  1. Type of crops (dropdown)
  2. Availablility (Date field)
  3. Quantity (in Kg)
  4. 
*/

const Item = props => {
  return (
    <View>
      <Text>{props.head}</Text>
      <TextInput style={styles.input}/>
    </View>
  )
}

const PostForSale = () => {
  return(
    <View>
      <Item head={"Type of crop"} />
      <Item head={"Availability"} />
      <Item head={"Quantity"} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1
  }
})

export default PostForSale;