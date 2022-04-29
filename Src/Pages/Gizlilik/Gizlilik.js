import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/GizlilikStyles/Gizlilik.styles';

const Gizlilik = () => {

    const Data = [
        {
            id: 0,
            desc:
                `www.cimri.com alan adı web sitesinin (kısaca “Site” olarak anılacaktır) tüm hakları Cimri Bilgi Teknolojileri ve Sistemleri A.Ş.’ne (kısaca “Cimri” olarak anılacaktır) aittir. Cimri, Site üzerinden kullanıcılar tarafından kendisine elektronik ortamda iletilen kişisel bilgileri, üyeleri ve kullanıcıları ile yaptığı sözleşmeler ile belirlenen amaçlar ve kapsam dışında üçüncü kişilere açıklamayacaktır.

Cimri, gerektiğinde kullanıcıların IP adreslerini tespit etmekte ve bunu kullanmaktadır. IP adresleri, kullanıcıları genel bir şekilde tanımlamak ve kapsamlı demografik bilgi toplamak amacıyla da kullanılabilir.

Üyelik veya Site üzerindeki çeşitli formların doldurulması ve oylamaların yapılması suretiyle kullanıcıların kendileriyle ilgili bir takım kişisel bilgileri (ad-soyadı, telefon, adres veya e-mail adresleri gibi) Cimri’ye vermeleri gerekmektedir. Cimri tarafından talep edilen bilgiler ve/veya kullanıcı tarafından sağlanan bilgiler ve/veya Site üzerinden yapılan işlemlerle ilgili bilgiler; Cimri ve işbirliği içinde olduğu kişiler tarafından, Cimri’nin üyeleri ve kullanıcıları ile yaptığı sözleşmeler ile belirlenen amaçlar ve kapsam dışında da, üyelerin ve kullanıcının kimliği ifşa edilmeden çeşitli istatistiksel değerlendirmeler, veritabanı oluşturma ve pazar araştırmalarında kullanılabilir. Cimri.com’dan gönderilen e-postaların alt kısmında bulunan “Cimri.com bültenlerini almak istemiyorsanız tıklayın.” linkine tıklayarak veya destek@cimri.com adresine e-posta göndererek e-posta gönderim listesinden kolayca çıkabilirsiniz.

Cimri, Site dahilinde başka sitelere link verebilir. Cimri, link vasıtasıyla erişilen sitelerin gizlilik uygulamaları ve içeriklerine yönelik herhangi bir sorumluluk taşımamaktadır.

Cimri, işbu gizlilik politikasında aksi belirtilmedikçe kişisel ilgilerden herhangi birini Cimri’nin işbirliği içinde olmadığı şirketlere ve üçüncü kişilere açıklamayacaktır. Aşağıda belirtilen sınırlı durumlarda Cimri, işbu “Gizlilik Politikası” hükümleri dışında kullanıcılara ait bilgileri üçüncü kişilere açıklayabilir. Bu durumlar sınırlı sayıda olmak üzere;

A. Yetkili hukuki otoriteler tarafından çıkarılan ve yürürlükte olan Kanun, Kanun Hükmünde Kararname, Yönetmelik v.b. gibi hukuk kurallarının getirdiği zorunluluklara uyulmasının;

B. Cimri’nin üyeleri ve kullanıcıları ile yaptığı sözleşmelerin gereklerinin yerine getirilmesi ve bunların uygulamaya konulmasının;

C. Yetkili idari ve adli otorite tarafından usulüne göre yürütülen bir araştırma veya soruşturmanın yürütümü amacıyla kullanıcılarla ilgili bilgi talep edilmesinin ve

D. Kullanıcıların hakları veya güvenliklerini korumak için bilgi verilmesinin gerekli olduğu hallerdir.

Cimri, kişisel bilgileri kesinlikle özel ve gizli tutmayı; bunu bir sır saklama yükümlülüğü olarak addetmeyi ve gizliliğin sağlanması ve sürdürülmesi, gizli bilginin tamamının veya herhangi bir kısmının kamu alanına girmesini veya yetkisiz kullanımını veya üçüncü bir kişiye ifşasını önlemek için gerekli tüm tedbirleri almayı ve gerekli özeni göstermeyi taahhüt etmektedir. Cimri’nin gerekli bilgi güvenliği önlemlerini almasına karşın, Site’ye ve sisteme yapılan saldırılar sonucunda gizli bilgilerin zarar görmesi veya üçüncü kişilerin eline geçmesi durumunda, Cimri’nin herhangi bir sorumluluğu olmayacaktır.

Cimri, kullanıcılara ve kullanıcıların Site’yi kullanımına dair bilgileri, teknik bir iletişim dosyasını (Kurabiye-Cookie) kullanarak elde edebilir. Bahsi geçen teknik iletişim dosyaları, ana bellekte saklanmak üzere, bir web sitesinin, kullanıcının tarayıcısına (browser) gönderdiği küçük metin dosyalarıdır. Teknik iletişim dosyası, bir web sitesi hakkında durum ve tercihleri saklayarak, internetin kullanımını kolaylaştırır. Teknik iletişim dosyası, bir web sitesini kaç kişinin kullandığı; bir kişinin web sitesini hangi amaçla, kaç kez ziyaret ettiği ve sitede ne kadar kaldığı hakkında istatistiksel bilgileri elde etmek amacıyla kullanılabilir. Ayrıca, kullanıcılar için özel olarak tasarlanmış kullanıcı sayfalarından, dinamik olarak izinli pazarlama mesajı ve içerik üretilmesine yardımcı olur. Teknik iletişim dosyası, ana bellekten veya kullanıcıların e-mail adresinden veri veya başkaca herhangi bir kişisel bilgi almak için oluşturulmamıştır. Tarayıcıların pek çoğu, başta teknik iletişim dosyasını kabul eder biçimde tasarlanmıştır; ancak kullanıcılar, dilerlerse teknik iletişim dosyasının gelmemesi veya teknik iletişim dosyası gönderildiğinde ikaz verilmesini sağlayacak biçimde, tarayıcı ayarlarını değiştirebilirler.

Cimri tarafından Site dahilinde düzenlenen periyodik anketlere cevap veren kullanıcılardan elde edilen bilgiler, Cimri veya işbirliği içinde olduğu kişiler tarafından, bu kullanıcılara doğrudan pazarlama yapmak, istatistiksel analiz yapmak veya veritabanı oluşturmak amacıyla kullanılmaktadır.

Cimri, işbu Gizlilik Politikası hükümlerini, dilediği zaman Site’de yayınlamak suretiyle, tek taraflı olarak değiştirebilir. Cimri’nin değişiklik yaptığı Gizlilik Politikası hükümleri, Site’de yayınlandığı tarih İtibariyle yürürlülüğe girer.

Her türlü sorunuz için;
destek@cimri.com email adresinden yada mesai saatleri içerisinde +90 (216) 468 12 80 nolu telefondan bize ulaşabilirsiniz.

Cimri.com Bilgi Teknolojileri ve Sistemleri A.Ş.
Kozyatağı Mah. Saniye Ermutlu Sok. No:6 Şaşmaz Plaza Kat:7 Kozyatağı - Kadıköy / İstanbul`
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
export default Gizlilik;