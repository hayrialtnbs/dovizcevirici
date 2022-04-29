import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StatusBar } from "react-native";
import styles from '../../Styles/AnaSayfaStyles/AnaSayfa.styles';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import ConvertButton from "../../Components/ConvertButton/ConvertButton";
import MainStore from "../../Store/MainStore";
import { observer } from "mobx-react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../Utils/Colors';
const AnaSayfa = (props) => {
    console.log(props)

    const [sourceAmount, setSourceAmount] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        setSourceAmount(MainStore.Amount)
    }, [])

    const handle = () => {
        props.navigation.navigate('Select')
        console.log('NEW TRANSACTİON')
    }

    const settings = () => {
        props.navigation.navigate('Ayarlar')
    }

    return (
        <LinearGradient colors={['#0F2027', '#203A43', '#2C5364']} style={styles.linearGradient}>
            <StatusBar backgroundColor={Colors.headerBackground} barStyle="dark-content" />

            <View >
                <View style={styles.maincontainer}>
                    <View>
                        <Text style={styles.textGroup}> From Currency </Text>
                        <TextInput
                            editable={false}
                            style={styles.textInput}
                            value={MainStore.selectCurrency.title} />

                        <Text style={styles.textGroup}> To Currency </Text>
                        <TextInput
                            editable={false}
                            style={styles.textInput}
                            value={MainStore.convertCurrency.title} />

                        <Text style={styles.textGroup}> Amount </Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={value => MainStore.setAmount(value)}
                            value={MainStore.Amount}
                            keyboardType="numeric"
                            editable={false} />

                        <Text style={styles.textGroup}>Converted Amount</Text>
                        <Text style={styles.textInput}>{result}</Text>
                    </View>

                    {/* BUTTON */}
                    <View>
                        <ConvertButton text="Convert"
                            onPress={() => setResult(
                                (MainStore.Amount / MainStore.selectCurrency.value * MainStore.convertCurrency.value).toFixed(2)
                            )} />

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <ConvertButton text="New Transaction" onPress={handle} />
                    </View>

                </View>

                {/* FOOTER */}

            </View>
            <View style={styles.container}>
                <View style={{ alignItems: "center", flex: 1 }}>
                    <Text style={styles.time}>{MainStore.Amount}
                        <Text> {MainStore.selectCurrency.title}  =
                            <Text>  {result}
                                <Text> {MainStore.convertCurrency.title}</Text>
                            </Text>
                        </Text>
                    </Text>
                    <Text style={styles.time}>{moment().format("DD.MM.YYYY HH:mm")} </Text>

                </View>
                <View style={{ flex: 1, position: "absolute", right: 12, margin: 10, marginTop: 17 }}>
                    <Ionicons name="settings" size={30} color="white" onPress={() => settings(console.log('OKU'))} />
                    <Text style={{ right: 10, color: "white" }}>Settings</Text>
                </View>
            </View>
        </LinearGradient>
    )
}
export default observer(AnaSayfa);