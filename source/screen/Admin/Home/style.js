import {StyleSheet} from "react-native";
import { colors } from "../../../until/colors";
import { width } from "../../../until/dimension";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    searchContainer: {
        flexDirection: "row",
        backgroundColor: "#eee",
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        elevation: 5,
        marginHorizontal: 15,
        marginTop:10,
        marginVertical: 10,
    },

    searchInput: {
        paddingHorizontal: 10
    },
    leftIcon: {
        padding: 5
    },
    headerList: {
        flexDirection: "row",
        padding: 10
    },
    addButton: {
        position: "absolute",
        right: 10,
        bottom: 10
    },
    labelAddProducts: {
        marginLeft: 22,

    }
   
    
    

})