import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/GizlilikStyles/Gizlilik.styles';

const AboutApas = () => {

    const Data = [
        {
            id: 0,
            desc:
                `Yüzlerce ürün kategorisinde yüzbinlerce ürünü içeren geniş bir kataloğa sahip online 
alışveriş rehberi Cimri.com 2008 yılında kurulmuştur. Cimri.com Mayıs 2011’de Türkiye’nin
önde gelen girişim sermayesi fonu iLab tarafından satın alınmıştır ve iLab portföyüne dahil edilmiştir.

Cimri.com size aşağıdaki hizmetleri ve faydaları sağlar:

- Ürünlerin mağazalardaki fiyatlarını listeleyerek en düşük fiyatı bulmanıza ve böylece tasarruf ederek
bütçenizi korumanıza yardımcı olur.

- Tüm mağaza fiyatlarını tek sayfada göstererek sizi mağazalar arasında dolaşma zahmetinden kurtarır ve size zaman kazandırır.

- Ürünleri satın almadan önce nelere dikkat etmeniz gerektiğine dair sizi bilgilendirerek rehberlik hizmeti sağlar.

- Ürünleri teknik özellikleri ve fiyatları açısından birbiri ile karşılaştırmaya olanak 
sağlayarak karar vermenize yardımcı olur.

- Sunduğu detaylı filtreleme seçenekleri sayesinde ihtiyacınız olan doğru ürünleri kolayca bulmanızı sağlar.

Cimri.com, ürünlerin mağazalardaki güncel fiyatlarını, fiyat geçmişlerini, açıklamalarını,
teknik özelliklerini, resimlerini, videolarını, kullanıcı yorumlarını, aradığınız ürünlere
benzer ürünleri, yeni ürünleri ve popüler ürünleri görebileceğiniz oldukça geniş bir kataloğa
sahip online alışveriş rehberinizdir.

Cimri.com’da ürünleri fiyata göre sıralayarak en düşük fiyatlı; popülerliğe göre sıralayarak 
en çok tercih edilen ya da güncelliğe göre sıralayarak en son model ürünleri tek sayfada 
kolaylıkla görebilirsiniz. Listelediğimiz mağazaların adres, telefon ve e-posta bilgilerine 
web sitemiz üzerinden ulaşabilir, ürün sayfalarında ürünlerin kredi kartı tek çekim, havale
ve taksitli fiyatlarını görebilirsiniz. Beğendiğiniz ürünleri Facebook ve Twitter gibi 
sosyal mecralarda paylaşabilir, ürünlere puan verebilir ya da yorum yazabilirsiniz.

Cimri’de başta bilgisayar, elektronik, fotoğraf ve kamera, cep telefonugibi kategoriler olmak
üzere pek çok kategoride binlerce markaya ait ürünler bulunmaktadır. Kategori, ürün, marka
ve listelediğimiz mağaza sayısını her geçen gün artırıyoruz.

Cimri.com’un kullanıcılarına indirimli ve yeni ürünleri düzenli olarak e-posta ile bildirdiği
e-bülten hizmeti de bulunmaktadır. Siz de indirimlerden, kampanyalardan ve yeni ürünlerden 
haberdar olmak istiyorsanız e-bülten hizmetimize kayıt olmayı unutmayınız.

Cimri.com’da kullanıcılara sunulan tüm hizmetler ücretsizdir. Cimri.com ürünlerin satışını 
yapan mağazaları listelemektedir; kesinlikle ve hiç bir şekilde ürün satışı yapmamaktadır. 
Cimri.com, güvenli, bilinçli ve keyifli alışverişin başlangıç noktasıdır. Almak istediğiniz
ürün her ne olursa olsun, satın almadan önce mutlaka Cimri’ye bakınız.

Adres: Kozyatağı Mah. Saniye Ermutlu Sok. No:6 Şaşmaz Plaza Kat:7 Kozyatağı - Kadıköy / İstanbul`
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
export default AboutApas;