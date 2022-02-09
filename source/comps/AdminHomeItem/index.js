import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { width } from '../../until/dimension';
import { imgUrl } from '../../until/global';
import { images } from '../../until/images';

function index ({item,index,widthArray,onUpdate,onDelete}) {
    return (
        <View style={{backgroundColor: index % 2 ? "#E6E6E6" : "white"}}>
        <View style={styles.headerItem}>
        {/* <Text>{JSON.stringify(item)}</Text> */}
        <Image source={{uri: imgUrl + item.image}} style={styles.image}/>
        <Text style={{width: widthArray[1], fontSize: 12, marginLeft: 29, textAlignVertical: "center"}}>{item.brand}</Text>
        <Text style={{width: widthArray[2], fontSize: 12, textAlignVertical: "center"}}>{item.name}</Text>
        <Text style={{width: widthArray[3], fontSize: 12, textAlignVertical: "center"}}>{item.categoryName}</Text>
        <Text style={{width: widthArray[4], fontSize: 12, textAlignVertical: "center"}}>{item.price}</Text>
        <Text style={{width: widthArray[4], fontSize: 12, textAlignVertical: "center"}}></Text>
        <View style={styles.toolContainer}>
        <TouchableOpacity onPress={onUpdate}>
        <Image source={images.ic_update}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
        <Image source={images.ic_delete}/>
        </TouchableOpacity>


        </View>
        </View>
        </View>
    );
}


const styles = StyleSheet.create({
    headerItem: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },
    image: {
        width: 80,
        height: 52,
        paddingVertical: 1,
        paddingRight: 10
    },
    toolContainer: {
        justifyContent: "space-between",
        marginLeft: 15
    }
})
export default index;