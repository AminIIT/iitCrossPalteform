import React, {ReactComponentElement} from "react";
import {Text, View,Button} from "react-native";
type CardProps={
  a:string
  b:string
  colorButton:string
}
export const CardIIT:React.FC<CardProps>=(props)=> {
  const {a,b,colorButton} =props
  console.log(props.a)
  console.log(props.b)
  return(<View>
    <Text>
      {b}
    </Text>
    <Text>
      {a}
    </Text>
    <Button title={b} color={colorButton}></Button>
  </View>)
}
