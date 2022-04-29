import { StyleSheet } from "react-native";

export default StyleSheet.create({
    linearGradient: { flex: 1, },
    card: {
        backgroundColor: "white",
        flex: 1,
        borderColor: "white",
        borderRadius: 25,
        borderWidth: 0.5,
        paddingVertical: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        padding: 20,
        minHeight: 250


    },
    textStarted: { fontSize: 30, color: "black", fontFamily: "serif", fontWeight: "bold", textAlign: "center" },
    textDesc: { fontSize: 18, textAlign: "center", color: "#9E9E9E" }

})