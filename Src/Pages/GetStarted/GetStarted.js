import React from 'react';
import { View, Text,StatusBar } from 'react-native';
import styles from '../../Styles/GetStartedStyles/GetStarted.styles';
import LinearGradient from 'react-native-linear-gradient';
import Coins from '../../Components/CoinsLottie/Coins';
import GetButtons from '../../Components/GetButtons/GetButtons';
import Colors from '../../Utils/Colors';

const GetStarted = ({ navigation }) => {

    const handle = () => {
        navigation.navigate('Select');
    }
    return (
        <LinearGradient colors={['#0F2027', '#203A43', '#2C5364']} style={styles.linearGradient}>
            <StatusBar backgroundColor={Colors.headerBackground} barStyle="dark-content" />
            <Coins />
            <View style={styles.card}>
                <View style={{ marginTop: 12 }}>
                    <Text style={styles.textStarted}>
                        Started to Discover New
                        <Text style={{ color: "#2C5364" }}> Currency</Text>
                    </Text>

                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.textDesc}>
                        Best trading platform and more
                        <Text> reliable financial transactions.
                        </Text>
                    </Text>
                    {/* <CurrencyButtons text="Get Started" onPress={handle} /> */}
                    <GetButtons text="Get Started" onPress={handle} />
                </View>

            </View>
        </LinearGradient>

    );
};
export default GetStarted;

