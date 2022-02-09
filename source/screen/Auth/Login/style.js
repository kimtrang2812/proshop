import {StyleSheet} from "react-native";
import { colors } from "../../../until/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -150
    },
    
    passInput: {
        marginVertical: 10,
        
    },

    button: {
        marginTop: 30
    },

    title: {
        fontSize: 25,
        color: colors.blue,
        textAlign: "center",
        marginTop: 120
    },

    message: {
        color: colors.black,
        marginVertical : 20,
        textAlign: "center"

    }
})