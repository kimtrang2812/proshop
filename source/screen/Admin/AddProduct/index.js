import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../../until/images';
import { styles } from './style';
import * as ImagePicker from 'expo-image-picker';
import { getAllCategory,addProduct } from '../../../api';
import { Button, Input, SelectData } from '../../../comps';
import { useNavigation } from "@react-navigation/native";

const index = (props) => {
    const [path,setPath] = useState(null);
    const [categoryList, setCategoryList] = useState([]);
    const [name,setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [message,setMessage] = useState("");
    const [image,setImage] = useState({});
    const [localUri, setLocalUri] = useState("");
    const [type, setType] = useState("");
    const [fileName, setFileName] = useState("");
    const [countInStock, setCountInStock] = useState(0);
    const [rating, setRating] = useState(0);
    const [numReviews, setNumReviews] = useState(0);
    const [isFeatured, setIsFeatured] = useState(false);
    const navigation = useNavigation();

    const featuredList = [
      {
        _id: true,
        name: "Đặc sắc"
      },
      {
        _id: false,
        name: "Thông thường"
      }
    ]

    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });


    
    
    
    if (!result.cancelled) {
      let localUri = "file:///"+result.uri.split("file:/").join("");
      let fileName = localUri.split("/").pop();

      let match = /\.(\w+)$/.exec(fileName);
      let type = match ? `image/${match[1]}` : "image";

      let fData = new FormData();
      fData.append("image",{
        uri: localUri,
        type: type,
        name: fileName
      })
      setImage(fData);
      setPath(result.uri);
      setLocalUri(localUri);
      setType(type);
      setFileName(fileName);
      
    }
  }

  //gọi api để filter list
  const getCategory = async() => {
    await getAllCategory().then((data)=> {
      console.log(data.data)
      if(data.status=="success") {
        setCategoryList(data.data)
      }
    })
  }

  const _addProduct = async(name="",brand="",price="",description="",category="",countInStock="",rating="",numReviews="",image) => {
    if(name.length==0) {
      setMessage("Vui lòng nhập tên sản phẩm");
    }else if(brand.length == 0) {
      setMessage("Vui lòng nhập thương hiệu sản phẩm");

    }else if(price.length <= 0) {
      setMessage("Vui lòng nhập giá sản phẩm");

    }else if(description.length == 0) {
      setMessage("Vui lòng nhập mô tả sản phẩm");
    }else if(countInStock.length == 0) {
      setMessage("Vui lòng nhập số lượng sản phẩm trong kho"); 
    }else if(rating.length == 0) {
        setMessage("Vui lòng xếp hạng sản phẩm"); 
    }else if(numReviews.length == 0) {
        setMessage("Vui lòng nhập số lượt đánh giá sản phẩm"); 
    }else if(category.length == 0) {
        setMessage("Vui lòng chọn loại sản phẩm");  
    }else if (Object.values(image).length==0) {
      setMessage("Vui lòng chọn hình ảnh cho sản phẩm");

    }else{
      setMessage("");
      let fData = new FormData();
      fData.append("image",{
        uri: localUri,
        type: type,
        name: fileName
      });
      fData.append("name", name);
      fData.append("description", description);
      fData.append("brand", brand);
      fData.append("price", price);
      fData.append("category", category);
      fData.append("countInStock", countInStock);
      fData.append("rating", rating);
      fData.append("numReviews", numReviews);
      fData.append("isFeatured", isFeatured);
      
      await addProduct(fData).then((data) => {
        if(data.status == "success") {
          alert(data.data.message);
          navigation.navigate("AdminHome")
        }
      })

    }

  }

    useEffect(() => {
        (async () => {
          await getCategory();
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);


    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => pickImage()}>
            {/* <Text>{path}</Text> */}
            <Image source={path ? {uri: path} : images.avatar} style={styles.avatar}/>
            {/* <Image source={path ? {uri: path} : images.avatar} style={styles.avatar}/> */}
            </TouchableOpacity>
            <Input placeholder="Name" width={300} style={{marginTop: 15}} onChangeText={(text)=>setName(text)}/>
            <Input placeholder="Brand" width={300} style={{marginTop: 15}} onChangeText={(text)=>setBrand(text)}/>
            <Input placeholder="Price" number width={300} style={{marginTop: 15}} onChangeText={(text)=>setPrice(text)}/>
            <Input placeholder="Descriptions" multiline width={300} style={{marginTop: 15}} onChangeText={(text)=>setDescription(text)}/>
            <Input placeholder="Count In Stock"  width={300} style={{marginTop: 15}} onChangeText={(text)=>setCountInStock(text)}/>
                     
            <View style={{flexDirection: "row", alignSelf: "center"}}>
            <Input placeholder="Rating" width={150} style={{marginTop: 15}} onChangeText={(text)=>setRating(text)}/>
            <Input placeholder="numReviews" width={150} style={{marginLeft: 10, marginTop: 15}} onChangeText={(text)=>setNumReviews(text)}/>
            </View>

{/* Select category */}
           <View style={{flexDirection: "row", alignSelf: "center"}}>
           <SelectData style={{marginTop: 15}} placeholder="Chọn thể loại" data={categoryList && categoryList} width={150} onPress={(item)=> setCategory(item._id)}/>
           <SelectData style={{marginTop: 15, marginLeft: 10,}} placeholder="Sản phẩm thuộc top" data={featuredList && featuredList} width={150} onPress={(item)=> setIsFeatured(item._id)}/>
           </View>
           <Button label="Thêm mới" onPress={()=> _addProduct(name,brand,price,description,category,countInStock,rating,numReviews,image,isFeatured)} width={300} style={{marginTop: 30, alignSelf: "center"}}/>
           <Text style={styles.message}>{message}</Text>
        </SafeAreaView>
    );
}

export default index;