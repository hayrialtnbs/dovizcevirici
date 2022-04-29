import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/GizlilikStyles/Gizlilik.styles';

const İnformationForm = () => {

    const Data = [
        {
            id: 0,
            desc:
                `İşbu sözleşme öncesi bilgilendirme formu, "cimri.com" adresli internet sitemizdeki hizmetlerden 
yararlanmak için üye olmak isteyen kullanıcıların imzalayacakları kullanıcı sözleşmesi hakkında 
sözleşme öncesi bilgilendirme amacıyla hazırlanmıştır. “cimri.com. sitesi, İstanbul Ticaret Sicili 
Müdürlüğü’nün 658285 sicil numarasında kayıtlı,0210021260500010 MERSİS no.lu, merkezi Kozyatağı Mah.
Saniye Ermutlu Sok. No:6 Şaşmaz Plaza Kat:7 Kozyatağı - Kadıköy / İstanbul adresinde bulunan, 
Cimri Bilgi Teknolojileri ve Sistemleri A.Ş. tarafından kurulmuş ve işletilmektedir. Şirketimize 
“destek@cimri.com” adresine e-posta göndererek veya (216) 468 1280 numaralı telefondan ulaşabilirsiniz.

- Cimri.com, internet üzerinden ürünleri, fiyatları, mağazaları karşılaştırmanıza yardımcı olan
bir alışveriş arama motorudur. Cimri.com ayrıca ürünlerin teknik özelliklerini, resimlerini,
videolarını, kullanıcı yorumlarını, aradığınız ürünlere benzer ürünleri, yeni ürünleri ve 
popüler ürünleri görebileceğiniz oldukça geniş bir kataloğa sahiptir. Cimri ile ilgili 
detaylı bilgiye footerdaki Cimri Hakkında başlığından ulaşabilirsiniz.

- Üyelik sözleşmesini kabul ederek üye olmanız için aşağıdaki adımları takip etmeniz gerekir:

- Üyelik, Site’nin ilgili bölümünden veya sitedeki ürünlere yorum yapmak suretiyle, Üye olmak
isteyen kişi tarafından Site’ye üye olmak için gerekli kimlik bilgilerinin gönderilmesi 
suretiyle kayıt işleminin yaptırılması ve Cimri tarafından kayıt işleminin onaylanması ile 
tamamlanır. Üyelik işlemi tamamlanmadan, işbu sözleşmede tanımlanan Üye olma hak ve yetkisine 
sahip olunamaz. Kullanıcı sözleşmesine footer’daki Kullanıcı Sözleşmesi başlığından her zaman 
ulaşabilirsiniz. Dilerseniz kullanıcı sözleşmesini bu kısımdan bilgisayarınıza indirebilir ya
da yazdırabilirsiniz. Sözleşme metninde zaman zaman şirketimiz tarafından değişiklikler
yapılabilir. Şirketimiz, değişikliklerden sonra önceki versiyonları saklamamaktadır.
Bu nedenle, sözleşmeyi onayladığınız andaki halini saklamak istiyorsanız, bilgisayarınıza indirmenizi öneririz.

- Üyelik işlemlerini yaparken veri girişinde hata yaparsanız, hatayı tespit etmek ve düzeltmek
için aşağıdaki adımları takip etmeniz gerekir:

Hesabım sayfasına giderek hesap bilgilerinizi güncelleyebilir, şifrenizi değiştirebilirsiniz.

Diğer tüm sorunlarınız için “destek@cimri.com” adresine mail atabilirsiniz.

- Şirketimiz, üyelere ilişkin kişisel bilgileri, üyeleri ve kullanıcıları ile yaptığı
sözleşmeler ile belirlenen amaçlar ve kapsam dışında üçüncü kişilere açıklamayacaktır.
Kullanıcı sözleşmesi ve gizlilik politikası hükümlerinde istisnai bazı hallerde kişisel
bilgilerin üçüncü kişilere açıklanabilmesi veya kullanılması öngörülmüştür. Aşağıda
belirtilen sınırlı durumlarda Cimri, üyelere ait bilgileri üçüncü kişilere açıklayabilir.

A. Yetkili hukuki otoriteler tarafından çıkarılan ve yürürlükte olan Kanun, Kanun Hükmünde
Kararname, Yönetmelik v.b. gibi hukuk kurallarının getirdiği zorunluluklara uyulması;

B. Cimri’nin üyeleri ve kullanıcıları ile yaptığı sözleşmelerin gereklerinin yerine 
getirilmesi ve bunların uygulamaya konulması; Cimri’nin üyelere ticari elektronik ileti
göndermek amacıyla bu bilgileri elektronik ileti gönderme hizmeti veren kişi ve kurumlara vermesi;

C. Yetkili idari ve adli otorite tarafından usulüne göre yürütülen bir araştırma veya
soruşturmanın yürütümü amacıyla kullanıcılarla ilgili bilgi talep edilmesi

D. Kullanıcıların hakları veya güvenliklerini korumak için bilgi verilmesi ve

E. Kullanıcı sözleşmesi ve gizlilik politikası hükümleri çerçevesinde kullanma ve açıklama izninin verildiği diğer haller.

Detaylı bilgiye footer’da yer alan Gizlilik Politikası bölümünden ulaşabilirsiniz.

- Cimri.com kullanıcılara anlaşmalı olduğu web sitelerinin fiyatlarını sunmaktadır.
Fiyat bilgileri belirli periyodlarla güncellenmektedir. Ancak mağazalar fiyat değişiklikleri
yaptığında Cimri.com’a anlık olarak yansımayabilir. Bu tür durumlar da göz önünde bulundurularak
mağazaya yönlenip, mağaza fiyatlarını dikkate almanız gerekmektedir.

- Cimri.com’a üye olan kullanıcılar kampanya ve indirimli fırsatlardan haberdar olabilir, 
Ürünlere ve mağazalara yorum yazabilir, karşılaştırma listesindeki ürünlere dilediği zaman ulaşabilirler.

- Cimri.com’a üye olmak ücretsizdir. Cimri, ilerde Hizmetleri ücretli hale getirme ve/veya
ücret karşılığı Hizmetler ilave etme hakkını saklı tutar.

- Üye, kullanıcı sözleşmesini onayladıktan sonra 14 gün içinde sözleşmeden cayma hakkını 
kullanabileceği gibi, cimri.com’a üye olan kullanıcılar istedikleri zaman üyeliklerini 
sonlandırabilirler. Cayma hakkını kullanmak veya üyeliğini sonlandırmak isteyen kullanıcılar
profil sayfalarından üyelikten ayrıl seçeneği ile veya destek@cimri.com mail adresine 
üyeliğini sonlandırmak istediklerine dair mail atarak sözleşmeyi feshedebilir ve üyelikten ayrılabilirler.

- Tüm şikayetlerinizi, soru ve önerilerinizi destek@cimri.com adresine e-posta göndererek
veya şirketimizin (216) 468 1280 numaralı telefonundan arayarak bize iletebilirsiniz.
Şikayetlerinize en geç 15 gün içinde cevap verilecektir.

- Üyeler, kullanıcı sözleşmesi ile ilgili uyuşmazlık konusundaki başvurularını 
Tüketici Mahkemesine veya Tüketici Hakem Heyetine yapabilirler.`
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
export default İnformationForm;