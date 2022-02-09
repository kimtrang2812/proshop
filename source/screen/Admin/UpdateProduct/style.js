import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../../until/colors";
 
export const styles = StyleSheet.create({
    avatar: {
        alignSelf: "center",
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 50
    },
    message: {
        color: colors.orange,
        textAlign: "center",
        marginTop: 15
    }

})