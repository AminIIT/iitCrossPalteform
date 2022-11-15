import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
type AppNextButtonProps={
  backgroundColor: string,
  textColor:string,
  borderRadius:string,
  text:string,
  type:string,
}
export const AppNextButton:React.FC<AppNextButtonProps>= (props:AppNextButtonProps) => {
  const{backgroundColor,textColor,borderRadius,text,type}=props
 const styleComponent={
  container:type=="link" ? [] : {backgroundColor: backgroundColor},
  text:{color:"black",borderBottomColor:"blue",borderBottomWidth:5}


 }
  return (
    <View>
      <TouchableOpacity style={styleComponent.container}>
      <Text  style={styleComponent.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AppNextButton

const styles = StyleSheet.create({})
