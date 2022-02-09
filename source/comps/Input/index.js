import React from "react";
import {View, Text,TextInput} from "react-native";
import {styles} from "./style";

const index = (props) => {
    
    
    return (
        <View style={[styles.container, props.style,{width:props.width}]}>
            <TextInput defaultValue={props.defaultValue} keyboardType={props.number ? "number-pad" : "default"} multiline={props.multiline ? true : false} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value} keyboardType={props.keyboardType} secureTextEntry={props.password ? true : false }/>
        </View>
    )

}

export default index;