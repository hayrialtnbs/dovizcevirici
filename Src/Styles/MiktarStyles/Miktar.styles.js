import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { flex: 1, },
    header: {
        flex: 1,
        alignItems: "center",
        marginTop: "50%"
    },
    headertext: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        fontFamily: "serif"
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#E0E0E0",
        backgroundColor: "#E0E0E0",
        borderRadius: 15,
        width: '100%',
        color: "black"
    },
    textMiktar: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        fontFamily: "serif"
    }
})