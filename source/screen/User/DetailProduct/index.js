import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, Text, ToastAndroid, TouchableOpacity } from 'react-native';
import { getProductById } from '../../../api';
import { Button } from '../../../comps';
import { imgUrl } from '../../../until/global';
import { images } from '../../../until/images';
import { _receiveData, _removeData, _storeData } from '../../../until/storage';
import { styles } from './style';


const index = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params?.id;
    const [data,setData] = useState();
    const[loading,setLoading] = useState(false)

    const getData = async(id) => {
        await getProductById(id).then((data)=>{
            if(data.status == "success") {
                setData(data.data.data);
                setLoading(false)

            }else{
                
            }
        })

    }

    useEffect(() => {
        getData(id)
    },[navigation]);


    const addProductToCart = async(item) => {
        let newArr = []
        await _receiveData("savedCart").then(async(data)=>{
            if(data==null){
                newArr.push(item)
                await _storeData("savedCart",newArr)
        }else{
            data.push(item)
            await _removeData("savedCart");
            await _storeData("savedCart",data);

            }

            ToastAndroid.showWithGravity("Đã thêm sản phẩm vào giỏ hàng", 2000, ToastAndroid.BOTTOM);
        })

    }


    const checkAuth = async() => {
        await _receiveData('userInfo').then((data) => {
            console.log(data)
            if(data.token!=null) {
                navigation.navigate("Cart")

            } else {
                navigation.navigate("Login")
            }
        })

    }

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
                    <Image source={images.ic_cart}/>
                </TouchableOpacity>
            ),
        });
    },[navigation]);

    return (
       <SafeAreaView>
       {loading == true || data == undefined ? <ActivityIndicator size="small" color= "blue" style={{marginTop: 20}}/> : null}
           {/* <Text>{JSON.stringify(data)}</Text> */}
           <Image source={{uri: `${imgUrl}${data&&data.image}`}} style={styles.pImage}/>
           <Text style={styles.pName}>{data&&data.name}</Text>
           <Text style={styles.pPrice}>{data&&data.price.toString()}</Text>
           <Text style={styles.descriptionLabel}>Mô tả</Text>
           <Text style={styles.pDescription}>{data&&data.description}</Text>
           <Button onPress={()=>addProductToCart(data)} label="Thêm vào giỏ hàng" style={styles.button} />
           <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
                    <Image source={images.ic_cart}/>
                </TouchableOpacity>
       </SafeAreaView>
    );
}

export default index;