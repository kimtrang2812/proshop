import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        marginRight: 10,
        borderRadius: 10
    },
    itemContainer: {
        
        flexDirection: "row",
        margin: 10
    },
    name: {
        
        fontWeight: "bold",
        fontSize: 20,
        color: "grey"
        
    },
    price: {
        
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        textAlign: "right"
    },
    plusContainer: {
        paddingHorizontal: 20,
        backgroundColor: "#FFC107",
        paddingVertical: 5,
        borderRadius: 20
    },
    plusText: {
        color: "white",
        fontSize: 15,
    }
})