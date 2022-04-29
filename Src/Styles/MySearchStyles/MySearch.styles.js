import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export default StyleSheet.create({
    header: {
        backgroundColor: Colors.headerBackground,
        width: '100%',
        height: 60,
        justifyContent: "center",
        paddingHorizontal: "5%",
        alignItems: "center"

    },
    headerText: {
        color: Colors.headerText,
        fontSize: 20,
        fontWeight: "bold",
    }
})