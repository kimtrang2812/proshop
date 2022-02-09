import { useRoute, useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View, ScrollView, ToastAndroid } from "react-native";
import { Button, Input } from "../../../comps";
import { imgUrl } from "../../../until/global";
import { styles } from "./style";
import { _receiveData, _removeData } from "../../../until/storage";
import { orderProduct } from "../../../api";

function index(props) {
    const route = useRoute();
    const data = route.params?.data;
    const totalPrice = route.params?.totalPrice;
    const [address,setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const navigation = useNavigation();

    const pushData = {
        "orderItems":[
            {
                "product":"61888b341df7dd2c38d7a074",
                "quantity":3
            },
            {
                "product":"618892f861a80006fc55f16d",
                "quantity":1
            }
        ],
        "shippingAddress1":"47/4/5 Trường Chinh, P.12, Tân Bình, TP.HCM",
        "shippingAddress2":"470 Lạc Long Quân, P.12, Tân Bình",
        "city": "Hồ Chí Minh",
        "zip":"30000",
        "country":"Việt Nam",
        "phone":"+84383838003",
        "user":"612bbfd82c23d91a90e46faa"
    }

    const orders = async (data,address,city,zip,phone) => {
        let user = {};
        // console.log(data,address,city,zip,phone)
        await _receiveData("userInfo").then((item) => user = item.user)
        let tempData = [];
        for(let i = 0; i < data.length; i++) {
            const element = data[i]._id;
            tempData.push({"product":element,quantity: 1})
        }
        let orderData = {
            "orderItems": tempData,
            "shippingAddress1": address,
            "city": city,
            "zip": zip,
            "country": "Việt Nam",
            "phone": phone || user.phone,
            "user": user._id
        }

        
        await orderProduct(orderData).then(async(data)=>{
            if(data.status=="success") {
                await _removeData("savedCart").then(()=>{
                    ToastAndroid.showWithGravity("Đặt hàng thành công", 2000, ToastAndroid.BOTTOM);
                    navigation.navigate("UserHome")
                })
            }
        })

    }
  return (
    <SafeAreaView>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
      <FlatList
          data = {data}
          keyExtractor={(item,index) => index.toString()}
          showsVerticalScrollIndicator = {false}
          renderItem={({item,index}) => {
              return <View style={styles.itemContainer} key={index.toString()}>
                   <Image style={styles.image} source={{uri: `${imgUrl}${item.image}`}}/>
                   <View style={{justifyContent: "flex-end", flex: 1, marginRight: 20}}>
                       <Text style={styles.name}>{item.name}</Text>
                       <Text style={styles.price}>{item.price}</Text>
                      
                   </View>
               </View>
          }}
      />
      </View>
      <View style={styles.hr}/>
      <View style={{flexDirection: "row", justifyContent: "space-around"}}>
      <Text style={{...styles.totalPrice, flex: 1, left: 10}}>Tổng tiền:</Text>
      <Text style={styles.totalPrice}>{totalPrice}</Text>
      </View>
      <View style={styles.addressContainer}>
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 20, marginBottom: 15}}>Thông tin giao hàng</Text>
          <Input onChangeText={(text) => setAddress(text)} placeholder="Địa chỉ giao hàng" style={styles.inputAddress} width={290}/>
          <Input onChangeText={(text) => setZip(text)} placeholder="Thành phố" style={styles.inputAddress} width={290}/>
          <Input onChangeText={(text) => setCity(text)} placeholder="Mã zip" style={styles.inputAddress} width={290}/>
          <Input onChangeText={(text) => setPhone(text)} placeholder="Số điện thoại" style={styles.inputAddress} width={290}/>
          <Button label="Đặt hàng" 
          onPress={()=>orders(
              data,
              address,city,zip,phone
          )} 
          style={{alignSelf: "center", marginVertical: 30}} width={350}/>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default index;
