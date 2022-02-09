import {StyleSheet} from "react-native";
import { colors } from "../../../until/colors";

export const styles = StyleSheet.create({
    pImage: {
        width: "90%",
        alignSelf: "center",
        height: 300
    },
    pName: {
        fontSize: 29,
        fontWeight: "bold",
        color: "grey",
        left: 20
    },
    pPrice: {
        color: "#000",
        textAlign: "right",
        right: 29,
        fontSize: 20,
        fontWeight: "bold"
    },
    descriptionLabel: {
        color:"grey",
        left: 25,
        fontSize: 20,
        marginTop: 10
    },
    pDescription: {
        left: 25,
        fontSize: 15,
        color: colors.black,
        marginTop: 10
    },
    button: {
        width: 300,
        alignSelf: "center",
        marginTop: 30
    }
})
