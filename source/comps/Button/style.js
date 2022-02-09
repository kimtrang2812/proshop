import {StyleSheet} from "react-native";
import { colors } from "../../until/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        borderRadius: 20,
        padding: 10,
        width: 150
    },

    label: {
        textAlign: "center",
        color: colors.white,
        fontSize: 15,
        fontWeight: "bold"
        
    },

    plus: {
        position: "absolute",
        bottom: 10,
        left: 10
    }



})