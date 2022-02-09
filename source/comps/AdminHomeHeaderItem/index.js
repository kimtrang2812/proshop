import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { width } from '../../until/dimension';

function index ({item,index,widthArray}) {
    return (
        <View style={styles.headerItem,{paddingLeft: index == 1 ? 1 : 0, width: index==0 ? 110 : widthArray[index]}}>
        <Text style={styles.text}>{item}</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    headerItem: {
        padding: 1,
        paddingVertical: 18,
    
    },
    text: {
        fontWeight: "bold",
        textAlignVertical: "center"
    }
 
})
export default index;