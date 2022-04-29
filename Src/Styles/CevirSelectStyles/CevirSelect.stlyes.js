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
        borderColor: "white",
        backgroundColor: "white",
        borderRadius: 15,
        width: '70%',
        color: "black"
    },
    textMiktar: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        fontFamily: "serif"
    },
    textInput: {
        backgroundColor: "#E0E0E0",
        marginBottom: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        color: "black",
        zIndex: 1
    },
})