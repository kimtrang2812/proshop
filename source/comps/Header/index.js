import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../until/colors';

import { statusBarHeight } from '../../until/dimension';
import { images } from '../../until/images';
import { styles } from './style';

const Index = (props) => {
    return (
        <View>
        <View style={{flexDirection: "row", position:"absolute", zIndex: 20, paddingVertical: 15, marginTop: statusBarHeight}}>
        <TouchableOpacity  onPress={props.onBack} style={{paddingHorizontal: 10}}><Image source={images.ic_back} style={{tintColor: colors.white}}/></TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={props.onUpdate} style={{paddingHorizontal: 10}}><Image source={images.update}/></TouchableOpacity>

        </View>
        <Image source={images.header} style={{width: "100%", height: 200}}/>
        </View>
    );
}

export default Index;
