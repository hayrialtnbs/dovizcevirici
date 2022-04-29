import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/GizlilikStyles/Gizlilik.styles';

const ContactUs = () => {

    const Data = [
        {
            id: 0,
            desc:
                `Müşteri Hizmetleri
Cimri.com oldukça kapsamlı karşılaştırmalı bir alışveriş hizmeti olup, bilginin gücünü 
kullanarak alışveriş konusunda en iyi kararları almanıza yardımcı olur. Aradığınız ürünü 
bulmanız, karşılaştırma yapmanız ve de satın almanıza yardım etmek amacıyla, onlarca mağazadan 
binlerce ürünün detaylı fiyat bilgilerini, teknik özelliklerini, çok çeşitli fotoğraflarını ve 
bu bilgilerin tümünü karşılaştırabileceğiniz bir servisi sağlamaktadır.
                
Cimri.com'un kullanımı ve işlemleriniz hakkında bilgi almak veya bir öneride,bildirimde bulunmak 
için, 7 gün - 24 saat hizmet veren destek@cimri.com adresine email gönderebilirsiniz. Size en kısa sürede yanıt verilecektir.
                
Pek çok sorunuzun cevabını Sıkça Sorulan Sorular bölümünde bulabilirsiniz. Bunun dışında bir 
yardım isterseniz, bizimle aşağıdaki formdan irtibata geçebilirsiniz.
                
   Kep adresi: cimribilgi@hs01.kep.tr
                
   Eposta: destek@cimri.com
                
   Telefon numarası: 0216 468 12 80
                
    Mensubu olduğu meslek odası: İstanbul Ticaret Odası`
        }
    ]

    return (
        <LinearGradient
            colors={['#0F2027', '#203A43', '#2C5364']}
            style={styles.container} >
            <FlatList
                data={Data}
                renderItem={({ item }) =>
                    <View style={styles.CardContainer}>
                        <Text style={{ color: "white", textAlign: "left" }}>{item.desc}</Text>
                    </View>
                } />
        </LinearGradient>
    );
};
export default ContactUs;