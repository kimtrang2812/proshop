import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../comps';
import { imgUrl } from '../../../until/global';
import { _receiveData, _removeData } from '../../../until/storage';
import { styles } from './style';

const index = (props) => {
    const [data,setData] = useState([]);
    const [message, setMessage] = useState("");
    const [item, setItem] = useState({
        id:"",
        count: 0,
    });

    const [count,setCount] = useState(1);
    const [tempCount,setTempCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState("") 

    const navigation = useNavigation();
    
    const getData = async() => {
        await _receiveData("savedCart").then((item)=>{
            let totalPrice = 0
            if(item!=null) {
                setData(item);
                for(let i = 0; i < item.length; i++) {
                    totalPrice += item[i].price;
                }
                setTotalPrice(totalPrice)
            }else{


            }
        })
    }

    useEffect(() => {
        getData();
        // _removeData("savedCart");
    },[navigation]);



    const order = () => {
        navigation.navigate("Order",{"data": data,"totalPrice": totalPrice })
    }

    return (
       <SafeAreaView style={{flex: 1}}>
      <View style={{marginBottom: 50}}>
       <FlatList
           data={data}
           renderItem={({item,index}) => {
               return <View style={styles.itemContainer}>
                   <Image style={styles.image} source={{uri: `${imgUrl}${item.image}`}}/>
                   <View>
                       <Text style={styles.name}>{item.name}</Text>
                       <Text style={styles.price}>{item.price}</Text>
                       <View style={{flexDirection: "row", marginTop: 10}}>
                       <TouchableOpacity style={styles.plusContainer} onPress={()=>setCount(1)}>
                           <Text style={styles.plusText}>-</Text>
                       </TouchableOpacity>
                       <View style={{justifyContent: "center", marginHorizontal: 20}}>
                           <Text>{count}</Text>
                       </View>
                       <TouchableOpacity style={styles.plusContainer} onPress={()=>setCount(1)}>
                           <Text style={styles.plusText}>+</Text>
                       </TouchableOpacity>
                      

                       </View>
                   </View>
               </View>
           }}
       />
       </View>
       <View style={{ marginHorizontal: 5, justifyContent: "space-around", bottom: 0 ,position: "absolute", backgroundColor: "white", bottom: 0, padding: 10}}>
       <View style={{flexDirection: "row", bottom: 10}}>
           <Text style={{color: "black", fontSize: 15}}>Tạm tính</Text>
           <Text style={{textAlign: "right", fontSize: 18, marginLeft: 200, fontWeight: "bold"}}>{totalPrice}</Text> 
       </View>

       <View style={{wdth: Dimensions.get("screen").width ,flex: 1, height: 1, marginHorizontal: 3, justifyContent: "space-between", flexDirection: "row", backgroundColor: "grey"}}></View>


       <View style={{flexDirection: "row"}}>
           <Text style={{color: "black", fontSize: 15}}>Thành tiền</Text>
           <Text style={{textAlign: "right", fontSize: 18, marginLeft: 200, fontWeight: "bold"}}>{totalPrice}</Text> 
       </View>

       <Button label="Đặt hàng" onPress={()=>order()}></Button>
       </View>
       {/* <Button label="Thanh toán"></Button> */}

       </SafeAreaView>
    );
}

export default index;