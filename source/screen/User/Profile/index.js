import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, ToastAndroid, View } from 'react-native';
import { Circle, Header } from '../../../comps';
import { styles } from './style';
import { images } from '../../../until/images';
import { getUserById } from '../../../api';


const Profile = (props) => {
    const [user, setUser] = useState();
    const navigation = useNavigation();
    const getData = async() => {
        await getUserById().then((data) => {
            if(data.status=="success") {
                setUser(data.data)
                console.log(data.data)
            } else {
                ToastAndroid.showWithGravity(data.message);
            }
            
        });
    }

    useEffect(() => {
        getData();
    }, [navigation]);


    return (
        <SafeAreaView>
        <Header onBack={() => navigation.goBack()} title="Thông tin cá nhân"/>
        <Circle image={images.avatar} size={100} style={{marginTop: -80, alignSelf: "center"}}/>  
        <Text style={styles.text}>{user&&user.name}</Text> 
        <View style={styles.hr}/>
        <InfoItem icon={images.ic_email} title={user&&user.email}/>
        <InfoItem icon={images.ic_phone} title={user&&user.phone}/>
        <InfoItem icon={images.ic_address} title={user&&user.zip}/>
        </SafeAreaView>
    );
}
 
// component InfoItem
const InfoItem = ({icon,title}) => {
    return <View style={styles.itemContainer}>
        <Image source={icon} style={styles.icon} resizeMode="contain"/>
        <Text style={styles.title}>{title}</Text>
    </View>
}

export default Profile;
