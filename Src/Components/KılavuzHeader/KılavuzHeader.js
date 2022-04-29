import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const KılavuzHeader = (props) => {

    const backTo = () => {
        props.navigation.navigate('Ayarlar')
    }
    return (
        <View style={styles.header}>

            <TouchableOpacity style={{ position: "absolute", left: 10 }} onPress={() => backTo()} >
                <AntDesign name='arrowleft' size={25} color="white" />
            </TouchableOpacity>

            <Text style={styles.headerText}>Read Me</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.headerBackground,
        width: '100%',
        height: 60,
        justifyContent: "center",
        paddingHorizontal: "5%",
        alignItems: "center"

    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold"
    }
});
export default KılavuzHeader;