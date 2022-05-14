import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/AyarlarStyles/Ayarlar.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../Utils/Colors';

const Ayarlar = (props) => {

    // const gizlilik = () => {
    //     props.navigation.navigate('Gizlilik')
    // }

    const kullanmaKılavuzu = () => {
        props.navigation.navigate('Kullanma Kılavuzu')
    }

    // const apasHakkında = () => {
    //     props.navigation.navigate('About Apas')
    // }

    // const bilgilendirmeFormu = () => {
    //     props.navigation.navigate('İnformation Form')
    // }
    // const kullanıcıSözleşmesi = () => {
    //     props.navigation.navigate('User Agreement')
    // }
    // const verilerinKorunması = () => {
    //     props.navigation.navigate('Data Protection')
    // }
    // const cerezPolitikası = () => {
    //     props.navigation.navigate('Cookie Policy')
    // }
    // const bizeUlaşın = () => {
    //     props.navigation.navigate('Contact Us')
    // }

    const Data = [
        // {
        //     id: "1.",
        //     icon: "security",
        //     name: "Confidentiality Agreement",
        //     onpress: () => gizlilik()
        // },
        {
            id: "1.",
            iconName: "book-reader",
            name: "Read Me",
            onpress: () => kullanmaKılavuzu()
        },
        // {
        //     id: "3.",
        //     icon: "announcement",
        //     name: "About Apas",
        //     onpress: () => apasHakkında()
        // },
        // {
        //     id: "4.",
        //     iconName: "info-circle",
        //     name: "İnformation Form",
        //     onpress: () => bilgilendirmeFormu()
        // },
        // {
        //     id: "5.",
        //     icon: "assignment",
        //     name: "User Agreement",
        //     onpress: () => kullanıcıSözleşmesi()
        // },
        // {
        //     id: "6.",
        //     icon: "question-answer",
        //     name: "Data Protection",
        //     onpress: () => verilerinKorunması()
        // },
        // {
        //     id: "7.",
        //     icon: "policy",
        //     name: "Cookie Policy",
        //     onpress: () => cerezPolitikası()
        // },
        // {
        //     id: "8.",
        //     icon: "support-agent",
        //     name: "Contact Us",
        //     onpress: () => bizeUlaşın()
        // },
    ]
    return (
        <LinearGradient
            colors={['#0F2027', '#203A43', '#2C5364']}
            style={styles.container}>
            <StatusBar backgroundColor={Colors.headerBackground} barStyle="dark-content" />

            <FlatList
                data={Data}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.CardContainer} onPress={item.onpress} activeOpacity={0.5}>
                        <Text style={{ color: "white", fontSize: 18, padding: 15 }}>{item.id}</Text>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", fontStyle: "italic" }}>{item.name}</Text>
                        <MaterialIcons name={item.icon} size={30} color="white" style={styles.iconStyle} />
                        <FontAwesome5 name={item.iconName} size={30} color="white" style={styles.iconStyle} />
                    </TouchableOpacity>
                } />
        </LinearGradient>
    );
};
export default Ayarlar;