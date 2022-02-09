import { Platform, StyleSheet } from "react-native";
import { colors } from "../../until/colors";

export const styles = StyleSheet.create({
    container: {
    backgroundColor: colors.white,
    borderRadius: 22,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    alignSelf: "center",
    height: 35
  },

  label: {},
});
