import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Image,
  FlatList,
  Text,
  ScrollView,
  Alert,
  
} from "react-native";
import { getAllProduct, deleteProduct } from "../../../api";
import { images } from "../../../until/images";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/core"
import { AdminHomeHeaderItem, AdminHomeItem, Button } from "../../../comps";
import { width } from "../../../until/dimension";

const index = (props) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [message, setMessage] = useState("");

  const getData = async () => {
    await getAllProduct().then((data) => {
      if ((data.status = "success")) {
        setDataList(data.data.data);
        console.log(data.data.data);
      }
      if (data.status == "failed") {
        setMessage(data.setMessage);
      }
    });
  };

  useFocusEffect(()=>{
    const init = async () => {
      if(dataList.length==0){
        await getData();
      }else{
        
      }
    }
    init()
  })

  useEffect(() => {
    const init = async () => {
      if(dataList.length==0){
        await getData();
      }else{

      }
    };
    init();
  }, [dataList]);


  const _deleteProduct = async(item) => {
    Alert.alert("Thông báo","Bạn có chắc chắn muốn xóa sản phẩm này không ?", 
    [
      {
        text: "Hủy",
        onPress:()=>console.log("Cancle"),
        style: "Cancle"
      },
      {
        text: "OK",
        onPress:async()=>{
          await deleteProduct(item.id).then(async(data)=> {
            if(data.status == "success") {
              alert("Xóa sản phẩm thành công");
              await getData();
            }
            if(data.status == "failed") {
              alert(data.message);
            }
          })
        },
        style: "default"
      }
    ]);
    
  }

  const updateProduct = (item) => {
    navigation.navigate("UpdateProduct",{"item":item})
  }

  const headerList = ["", "Branch", "Name", "Categories", "Price", ""];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={images.search} style={styles.leftIcon} />
        <TextInput placeholder="Tìm kiếm sản phẩm" style={styles.searchInput} />
      </View>
      <ScrollView horizontal >
        <View style={{flex: 1}}>
          <FlatList
            data={dataList}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={
              <View style={styles.headerList}>
                {headerList.map((item, index) => (
                  <AdminHomeHeaderItem
                    item={item}
                    index={index}
                    widthArray={[width / 5, width / 3, width / 3, width / 3, width / 6, width / 8,
                    ]}
                  />
                ))}
              </View>
            }
            renderItem={({item, index}) => {
              return (
                <ScrollView horizontal>
                  <AdminHomeItem
                    onDelete={() => _deleteProduct(item)}
                    onUpdate={() => updateProduct(item)}
                    item={item}
                    index={index}
                    widthArray={[width / 5, width / 5, width / 2, width / 3.5, width / 6, width / 8,
                    ]}
                  />
                </ScrollView>
              );
            }}
          />
        </View>
      </ScrollView>

      <Button 
        icon={images.ic_plus} 
        width={width/2.5} 
        style={styles.addButton} 
        label={"Add products"} 
        styleLabel={styles.labelAddProducts}
        onPress={() => navigation.navigate("AddProduct")}
        />
        
    </SafeAreaView>
  );
};

export default index;
