import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    CardContainer: {
        flex: 1,
        margin: 15,
        padding: 15,
        borderWidth: 0.5,
        borderColor: Colors.settingsCardBackground,
        backgroundColor: Colors.settingsCardBackground,
        flexDirection: 'row',
        paddingVertical: 10,
        minHeight: 150,
        borderRadius: 15,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: "contain",
    }
})