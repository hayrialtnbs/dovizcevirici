import React, { Component, useEffect } from 'react';
import { View, Text, TextInput, Alert, StatusBar } from 'react-native';
import styles from '../../Styles/MiktarStyles/Miktar.styles';
import LinearGradient from 'react-native-linear-gradient';
import { observer } from 'mobx-react';
import MainStore from '../../Store/MainStore';
import GetButtons from '../../Components/GetButtons/GetButtons';
import Colors from '../../Utils/Colors';
const Miktar = (props) => {

    useEffect(() => {
        MainStore.setAmount(null)
    }, [])

    const buttonAlert = () =>
        Alert.alert(
            "Error",
            "Please Enter Amount",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    return (
        <LinearGradient colors={['#0F2027', '#203A43', '#2C5364']} style={styles.container}>
            <StatusBar backgroundColor={Colors.headerBackground} barStyle="dark-content" />

            <View style={styles.header}>
                <Text style={styles.headertext}>Please Enter Amount</Text>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => MainStore.setAmount(value)}
                    value={MainStore.Amount}
                    placeholder="Amount"
                    placeholderTextColor="gray"
                    keyboardType="numeric"
                />
                <Text style={styles.textMiktar}>Entered Amount : {MainStore.Amount} </Text>
            </View>

            <View style={{ flex: 1 }}>
                {
                    MainStore.Amount ?
                        (
                            <GetButtons text="Save Amount" onPress={() => props.navigation.navigate('Çevir Select')} />
                        ) : (
                            <GetButtons text="Save Amount" onPress={() => buttonAlert()} />
                        )
                }
            </View>

        </LinearGradient>
    );
};
export default observer(Miktar);