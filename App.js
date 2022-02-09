import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Register from "./source/screen/Auth/Register";
import Login from "./source/screen/Auth/Login";
import AdminHome from "./source/screen/Admin/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddProduct from "./source/screen/Admin/AddProduct";
import UpdateProduct from "./source/screen/Admin/UpdateProduct";
import UserHome from "./source/screen/User/Home";
import DetailProduct from "./source/screen/User/DetailProduct";
import Cart from "./source/screen/User/Cart";
import Order from "./source/screen/User/Order";
import Profile from "./source/screen/User/Profile";
import { Provider } from "react-redux";
import store from "./source/redux/store/store";

const AuthStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const LoginScreen = () => {
  return <Login />;
};

const RegisterScreen = () => {
  return <Register />;
};

const AdminHomeScreen = () => {
  return <AdminHome />;
};

const AddProductScreen = () => {
  return <AddProduct/>
}

const UpdateProductScreen = () => {
  return <UpdateProduct/>

}

const UserHomeScreen = () => {
  return <UserHome/>
}

const DetailProductScreen = () => {
  return <DetailProduct/>
}

const CartScreen = () => {
  return <Cart/>
}

const OrderScreen = () => {
  return <Order/>
}

const ProfileScreen = () => {
  return <Profile/>
}
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="AdminHome" screenOptions={{headerShown: false}} >
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
        
        <AdminStack.Screen name="AdminHome" component={AdminHomeScreen} />
        <AdminStack.Screen name="AddProduct" component={AddProductScreen}/>
        <AdminStack.Screen name="UpdateProduct" component={UpdateProductScreen}/>

        <UserStack.Screen name="UserHome" component={UserHomeScreen} />
        <UserStack.Screen name="DetailProduct" component={DetailProductScreen}/>
        <UserStack.Screen name="Cart" component={CartScreen}/>
        <UserStack.Screen name="Order" component={OrderScreen}/>

        <Stack.Screen name="Profile" component={ProfileScreen}/>

      </AuthStack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
