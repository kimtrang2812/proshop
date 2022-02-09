import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getAllCategory, getProductListByCategoryId } from "../../../api";
import { Input } from "../../../comps";
import { width } from "../../../until/dimension";
import { imgUrl } from "../../../until/global";
import { images } from "../../../until/images";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/core";
import { _receiveData } from "../../../until/storage";

const index = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAuth, setIsAuth] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigation = useNavigation();

  const getCategory = async () => {
    await getAllCategory().then((data) => {
      console.log(data.data);
      if (data.status == "success") {
        setCategoryList(data.data);
      }
    });
  };

  const getData = async (catId) => {
    await getProductListByCategoryId(catId).then((data) => {
      console.log(data);
      if (data.status == "success") {
        console.log(data.data.data);
        setProductList(data.data.data);
      }
    });
  };

  const checkRole = async () => {
    await _receiveData("token").then((item) => {
      if (item != null) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  };

  const _gotoCart = async () => {
    navigation.navigate("Cart");
  };
  useEffect(() => {
    const init = async () => {
      // console.log(categoryList)
      if (categoryList.length != 0) {
      } else {
        await getCategory();
        await getData(categoryList[0]._id);
        setSelectedIndex(0);
        checkRole();
      }
    };
    init();
  }, [categoryList]);

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Input
          style={{ marginTop: 30 }}
          placeholder="Tìm kiếm sản phẩm"
          leftIcon={images.search}
          width={310}
        />
        <TouchableOpacity
          onPress={() => {
            _gotoCart();
          }}
          style={{ alignItems: "center" }}
        >
          <Image source={images.ic_cart} style={{ marginTop: 20 }} />
          {isAuth == true ? (
            <View style={styles.cartCountContainer}>
              <Text style={{ color: "red" }}>{cartItemCount}</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
      <Image source={images.banner_01} style={styles.banner} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: -20, height: 60, backgroundColor: "white" }}
      >
        {categoryList.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedIndex(index), getData(item._id);
            }}
            style={[
              styles.categoryContainer,
              {
                backgroundColor:
                  index === selectedIndex ? "#F4B01B" : "#FFFFFF",
              },
            ]}
          >
            <Text
              style={{ color: index == selectedIndex ? "#FFFFFF" : "#000000" }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={productList}
        numColumns={2}
        columnWrapperStyle={{ marginTop: 10 }}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 300 }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailProduct", { id: item.id })
              }
              style={{
                width: 120,
                backgroundColor: "#fff",
                borderRadius: 15,
                shadowColor: "#333",
                shadowRadius: 15,
                shadowOffset: 10,
                elevation: 10,
                padding: 10,
                margin: 10,
                flex: 1 / 2,
              }}
            >
              <Image
                style={{ width: 140, height: 200 }}
                resizeMode="contain"
                source={{ uri: imgUrl + item.image }}
              />
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default index;
