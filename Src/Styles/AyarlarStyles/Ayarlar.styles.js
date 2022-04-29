import { StyleSheet } from "react-native";
import Colors from '../../Utils/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    CardContainer: {
        flex: 1,
        margin: 10,
        marginTop: 25,
        borderWidth: 0.5,
        borderColor: Colors.settingsCardBackground,
        backgroundColor: Colors.settingsCardBackground,
        flexDirection: 'row',
        paddingVertical: 10,
        minHeight: 70,
        borderRadius: 15,
        alignItems: "center",
    },
    iconStyle: {
        position: "absolute",
        right: 15,
        flex: 1
    }
})