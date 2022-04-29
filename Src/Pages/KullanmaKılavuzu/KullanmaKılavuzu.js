import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import KılavuzHeader from '../../Components/KılavuzHeader/KılavuzHeader';
import styles from '../../Styles/KılavuzStyles/Kılavuz.styles';

const KullanmaKılavuzu = (props) => {

    const Data = [
        { Name: "1. Step", desc: "First we choose one of currency 1. ", src: require('../../Assets/Images/fromCurrency.png') },
        { Name: "2. Step", desc: "After selecting From currency, enter the amount.", src: require('../../Assets/Images/amountCurrency.png') },
        { Name: "3. Step", desc: "After entering the amount, select to currency unit 2.", src: require('../../Assets/Images/toCurrency.png') },
        { Name: "4. Step", desc: "You can learn the result of the transaction by pressing the convert button on the last screen.", src: require('../../Assets/Images/anasayfaCurrency.png') },
    ]

    return (
        <LinearGradient
            colors={['#0F2027', '#203A43', '#2C5364']}
            style={styles.container} >
            <KılavuzHeader {...props} />
            <FlatList
                data={Data}
                renderItem={({ item }) =>
                    <View style={styles.CardContainer}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>{item.Name}</Text>
                            <Text style={{ color: "white", fontStyle: "italic", fontSize: 18 }}>{item.desc}</Text>
                        </View>

                        <View style={{ flex: 5, }}>
                            <Image source={item.src} style={styles.image} />
                        </View>
                    </View>
                } />
        </LinearGradient>
    );
};
export default KullanmaKılavuzu;