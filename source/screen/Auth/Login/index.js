import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./style";
import { Input, Button } from "../../../comps";
import { width } from "../../../until/dimension";
import { login } from "../../../api/index";
import { useNavigation } from "@react-navigation/native"
import Toast from 'react-native-toast-message';
import { showToast } from "../../../until/toast";
import { _storeData } from "../../../until/storage";
import { connect, useDispatch, useSelector } from "react-redux";
import { signin } from "../../../redux/actions/authAction";


const index = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.signinReducer);
  const {loading, error, user} = userState;



  const checkNull = (value) => {
      if(!value.trim()) {
          return false;
      }else{
          return true;
      }
    }

    // const _signIn = async(email,password) => {
    //     if(checkNull(email)==false) {
    //         showToast("error", "Email", "Email không được rỗng")
    //     }else if(checkNull(password)==false) {
    //         showToast("error", "Password", "Password không được rỗng")
    //     }else{
    //         await login(email, password).then(async(data)=> {
    //             if(data.status=="success") {
    //                 showToast("success", "Thành công", "Đăng nhập thành công");
    //                 await _storeData('userInfo', data.data);
    //                 if ( data.data.user.isAdmin == true) {
    //                     navigation.navigate("AdminHome")
    //                 } else {
    //                     // showToast("success", "UserHome", "UserHome");
    //                     navigation.navigate("UserHome")
                        
    //                 }
    //                 console.log(data.data)
                    
    //             }else if(data.status=="failed") {
    //                 setMessage(data.message)
    //             }

    //         })
    //     }

    // }

    const _signIn = async(email="", password="") => {
         if(email.length == 0) {
             setMessage("Bạn chưa nhập email")
         } else if (password.length == 0) {
             setMessage("Bạn chưa nhập password")

         } else {
           setMessage("")
           dispatch(signin(email,password));
           if(user) {
             if(user.user && user.user.isAdmin == true) {
              navigation.navigate("AdminHome");
             } else {
               navigation.navigate("UserHome");
             }
             
           }
           if(error) {
             setMessage(error.message)
           }
         }
    };

  return (
    <SafeAreaView style={styles.container}>
    <Toast style={{marginTop: 150}} ref={(ref) => Toast.setRef(ref)} />
      <Text style={styles.title}>ĐĂNG NHẬP</Text>
      <Text style={styles.message}>{message}</Text>
      <Input
        placeholder="Email"
        width={width - 100}
        value={email}
        style={styles.passInput}
        onChangeText={(value) => setEmail(value)}
      />

      <Input
        placeholder="Mật khẩu"
        width={width - 100}
        value={password}
        style={styles.passInput}
        password
        onChangeText={(value) => setPassword(value)}
      />

      <Button
        label="Đăng nhập"
        width={150}
        style={styles.button}
        onPress={() => _signIn(email, password)}
      />
      <Toast style={{marginTop: 50}} ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default connect()(index);
