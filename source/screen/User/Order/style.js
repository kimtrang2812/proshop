import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 69,
        marginRight: 10,
        borderRadius: 10
    },
    itemContainer: {
        
        flexDirection: "row",
        margin: 10,
        justifyContent:"space-around",
        width: "100%"
    },
    name: {
        
        fontWeight: "bold",
        fontSize: 15,
        color: "grey"
        
    },
    price: {
        
        fontWeight: "bold",
        fontSize: 15,
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
    },
    hr: {
        height: 1,
        opacity: 0.6,
        width: "100%",
        backgroundColor: "#333",
        marginBottom: 10
    },
    totalPrice: {
        alignSelf: "flex-end",
        marginRight: 15,
        color: "blue",
        fontWeight: "bold",
        fontSize: 20
    },
    addressContainer: {
        marginTop: 10

    },
    inputAddress: {
       marginTop: 15
    }
})