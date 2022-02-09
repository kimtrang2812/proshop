import {StyleSheet} from "react-native";
import { colors } from "../../../until/colors";
import { width } from "../../../until/dimension";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    banner: {
        resizeMode: "contain",
        width: "100%",
        height: 200,
        marginTop: -22
    },
    categoryContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        height: 60
        
    },
    content: {
        flex: 1,
        backgroundColor: colors.white
    },
    cartCountContainer: {
        backgroundColor: "white",
        padding: 2,
        width: 15,
        height: 20,
        borderRadius: 5,
        alignItems: "center",
        top: -10,
        right: -10
    }
   
    
    

})