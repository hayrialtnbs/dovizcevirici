import { StyleSheet } from "react-native";

export default StyleSheet.create({
    linearGradient: { flex: 1, },
    maincontainer: {
        justifyContent: "center",
        marginTop: '40%',
    },
    textInput: {
        backgroundColor: "#E0E0E0",
        marginBottom: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        color: "black",
        padding: 10
    },
    textGroup: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "serif"
    },
    container: {
        backgroundColor: '#282828',
        position: "absolute",
        bottom: 0,
        width: '100%',
        paddingVertical: 20,
        flex: 1

    },
    time: {
        right: 8,
        color: "#52af71",
        fontWeight: 'bold',
        fontSize: 15
    },
    text: {
        right: 8,
        color: "gray",
        fontWeight: 'bold',
        fontSize: 12
    },

})