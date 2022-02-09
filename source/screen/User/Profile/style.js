import {StyleSheet} from "react-native"
import { colors } from '../../../until/colors';

export const styles = StyleSheet.create({
    text: {
        alignSelf: "center",
        marginVertical: 5,
        fontSize: 18
    },
    hr: {
        height: 1,
        backgroundColor: colors.grey,
        width: "80%",
        alignSelf: "center",
        marginTop: 10,
    },
    itemContainer: {
        flexDirection: "row",
        marginVertical: 6
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 50,
        marginTop: 20,
        marginTop: 25
    },
    title: {
        fontSize: 16,
        color: colors.grey,
        marginLeft: "3%",
        marginTop: 25,
        width: "59%"
    }

})