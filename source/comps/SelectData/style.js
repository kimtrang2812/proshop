import { StyleSheet } from "react-native";
import { colors } from "../../until/colors";


export const styles = StyleSheet.create({
    select: {
        backgroundColor: colors.white,
        padding: 7,
        flexDirection: "row",
        borderRadius: 25,
        height: 50
    },
    selectText: {
        flex: 1,
        paddingLeft: 10,
        textAlignVertical: "center"
    },
    item: {
        padding: 10
    },
    modalTitle: {
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    dropdown: {
        resizeMode: "contain",
        width: 25,
        marginTop: 10
    }

})