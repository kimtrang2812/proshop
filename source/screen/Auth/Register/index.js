import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button, Input } from "../../../comps";
import { width } from "../../../until/dimension";
import { styles } from "./style";
import { register } from "../../../api/index";
import Toast from 'react-native-toast-message';
import { showToast } from "../../../until/toast";
import { useNavigation } from "@react-navigation/native"
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/actions/authAction";

const index = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [apartment, setApartment] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const registerState = useSelector(state => state.signupReducer);
  const {loading, error, user} = registerState;

  const checkNull = (value) => {
    if (!value.trim()) {
      return false;
    } else {
      return true;
    }
  };

  // const _signUp = async (name,email,password,phone,apartment,zip,city,country) => {
  //   if (checkNull(name) == false) {
  //     showToast("error", "Họ tên", "Họ tên không được rỗng")
  //   } else if (checkNull(email) == false) {
  //     showToast("error", "Email", "Email không được rỗng")
  //   } else if (checkNull(password) == false) {
  //     showToast("error", "Password", "Password không được rỗng")
  //   } else if (checkNull(confirmPassword) == false) {
  //     showToast("error", "ConfirmPassword", "Vui lòng nhập lại password")
  //   } else if (password != confirmPassword) {
  //     showToast("error", "Password", "Mật khẩu xác nhận chưa trùng khớp")
  //   } else if (checkNull(apartment) == false) {
  //     showToast("error", "Apartment", "Vui lòng nhập lại địa chỉ")
  //   } else if (password.length < 6 || confirmPassword.length < 6) {
  //     showToast("error", "Password", "Độ dài mật khẩu phải từ 6 ký tự trở lên")
  //   } else if (checkNull(zip) == false) {
  //     showToast("error", "Zip", "Vui lòng nhập lại zip code")
  //   } else if (checkNull(city) == false) {
  //     showToast("error", "City", "Vui lòng nhập lại thành phố bạn sinh sống")
  //   } else if (checkNull(country) == false) {
  //     showToast("error", "Country", "Vui lòng nhập lại quốc gia")
  //   } else {
  //     await register(name,email,password,phone,apartment,zip,city,country).then((data) => {
  //       if(data.status == "success") {
  //         showToast("success", "Thành công", "Đăng ký thành công")
  //         navigation.navigate("Login")
  //       }else if(data.status == "failed") {
  //         setMessage(data.message)
  //       }
  //     });
  //   }
  // };

  const _signUp = async(name="",email="",password="",phone="", apartment="",zip="",city="",country="") => {
    if(name.length == 0) {
      setMessage("Bạn chưa nhập name")
    } else if(email.length == 0) {
      setMessage("Bạn chưa nhập email")
    } else if(password.length == 0) {
      setMessage("Bạn chưa nhập password")
    } else if(phone.length == 0) {
      setMessage("Bạn chưa nhập phone")
    } else if(apartment.length == 0) {
      setMessage("Bạn chưa nhập apartment")
    } else if(zip.length == 0) {
      setMessage("Bạn chưa nhập zip")
    } else if(city.length == 0) {
      setMessage("Bạn chưa nhập city")
    } else if(country.length == 0) {
      setMessage("Bạn chưa nhập country")
    } else {
      setMessage("")
      dispatch(signup(name,email,password,phone,apartment,zip,city,country));
      if(user) {
        alert("Đăng ký thành công")
        navigation.navigate("Login")
        } else {
        alert(error)
        }
      
      
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    <Toast ref={(ref) => Toast.setRef(ref)} />
      <Text style={styles.title}>ĐĂNG KÝ</Text>
      <Text style={styles.message}>{message}</Text>
      <Input
        placeholder="Họ tên"
        width={width - 100}
        onChangeText={(value) => setName(value)}
      />
      <Input
        placeholder="Email"
        style={styles.passInput}
        keyboardType="email"
        width={width - 100}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        placeholder="Mật khẩu"
        style={styles.passInput}
        password
        width={width - 100}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Input
        placeholder="Xác nhận mật khẩu"
        style={styles.passInput}
        password
        width={width - 100}
        value={confirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
      />
      <Input
        placeholder="Địa chỉ"
        style={styles.passInput}
        width={width - 100}
        value={apartment}
        onChangeText={(value) => setApartment(value)}
      />
      <Input
        placeholder="Số điện thoại"
        style={styles.passInput}
        width={width - 100}
        value={phone}
        onChangeText={(value) => setPhone(value)}
      />
      <Input
        placeholder="Zip"
        style={styles.passInput}
        width={width - 100}
        value={zip}
        onChangeText={(value) => setZip(value)}
      />
      <Input
        placeholder="Thành phố"
        style={styles.passInput}
        width={width - 100}
        value={city}
        onChangeText={(value) => setCity(value)}
      />
      <Input
        placeholder="Quốc gia"
        style={styles.passInput}
        width={width - 100}
        value={country}
        onChangeText={(value) => setCountry(value)}
      />
      <Button
        label="Đăng ký"
        width={150}
        style={styles.button}
        onPress={() =>
          _signUp(name, email, password, phone,apartment,zip,city,country)
        }
      />
    </SafeAreaView>
  );
};

export default index;
