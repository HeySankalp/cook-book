import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'

function Categorytile({ title, color, onPress }) {
  return (
    <View style={styles.outerCon}>
      <Pressable 
      android_ripple={{color:"#cccccc"}} 
      onPress={onPress}
      style={({pressed})=>[styles.press, pressed && styles.pressed]}>
        <View style={[styles.innerCon, {backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Categorytile


const styles = StyleSheet.create({
  outerCon:{
    flex:1,
    margin:16,
    height:150,
    borderRadius:8,
    elevation:4,
    backgroundColor:'white',
    overflow:'hidden'
  },
  press:{
    flex:1
  },
  pressed:{
    opacity:0.65
  },
  innerCon:{
    flex:1,
    padding:16,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontSize:18,
    fontWeight:'bold'
  }

})