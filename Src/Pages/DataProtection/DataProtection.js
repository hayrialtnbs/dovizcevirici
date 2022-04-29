import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/GizlilikStyles/Gizlilik.styles';

const DataProtection = () => {

    const Data = [
        {
            id: 0,
            desc:
                `KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ HAKKINDA AYDINLATMA METNİ
KİŞİSEL VERİLERİN KORUNMASI HAKKINDA AYDINLATMA METNİ

Apas Bilişim Mühendislik Limited Şirketi olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
(“KVKK”) uyarınca; Veri Sorumlusu sıfatıyla, işleme amacı ile bağlantılı, sınırlı ve ölçülü
olacak şekilde talep ettiğimiz ve bizimle paylaşmış olduğunuz kişisel verilerinizin, yine 
işlenmelerini gerektiren amaç çerçevesinde; kaydedilecek, depolanacak, muhafaza edilecek, 
yeniden düzenlenecek, kanunen bu kişisel verileri talep etmeye yetkili olan kurumlar ile 
paylaşılacak, KVKK’ nın öngördüğü hallerde ve koşullarda, yurt içi veya yurt dışı üçüncü
kişilere aktarılacak, devredilebilecek, sınıflandırılabilecek ve KVKK’ da sayılan sair 
şekillerde işlenebilecek olduğunu bildiririz.

Şirketimiz olarak kişisel verilerinizin işlenme amaçları ve hukuki sebepleri şunl'ardır:
Kendi istek ve iradenizle bizimle paylaşmış olduğunuz kişisel verileriniz
(ad, soyad, şirket adı, doğum tarihi, cep telefonu numarası, e-posta, cinsiyet, 
adres, meslek, eğitim, medeni durum, kimlik bilgileri, sosyal medya, fatura bilgileri, 
vergi numarası gibi) size daha iyi hizmet verebilmek amacıyla işlenmektedir. 5651 sayılı
İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla
Mücadele Edilmesi Hakkında Kanun ve bağlı mevzuat, 6563 Sayılı Elektronik Ticaretin
Düzenlenmesi Hakkında Kanun ve bağlı mevzuat, 5237 sayılı Türk Ceza Kanunu ve 6698 
sayılı Kişisel Verilerin Korunması Kanunu başta olmak üzere, ilgili mevzuattan kaynaklanan
yasal yükümlülüklerimiz çerçevesinde; söz konusu amaç ve yasal yükümlülüklerimizin yerine
getirilebilmesini sağlamak amacıyla da, kişisel verileriniz işlenmektedir. Faaliyetlerimiz 
kapsamında, tarafınıza ait gerekli kişisel bilgileri distribitörü olduğunuz APAS+ ve 
sunulan hizmet ile ilgili kişi ve kuruluşlar ile paylaşılmaktadır. Bugüne kadar olduğu gibi, 
bu kişisel verileriniz bu defa Kişisel Verilerin Korunması Kanunu md. 5 ve 6’da yer alan istisnalar
saklı olmak kaydıyla, verdiğiniz açık rızanıza istinaden, işbu Kişisel Verilerin Korunması 
Politikası ile belirlenen amaçlar ve kapsam dışında kullanılmamak kaydı ile bilgi güvenliği 
tedbirleri de alınarak işlenecek ve saklanacaktır. Yukarıda belirtilen amaçlarla, kişisel 
verilerin aktarılabileceği kişi/kuruluşlar; Türk Ticaret Kanunu, Türk Borçlar Kanunu, Vergi 
Usul Kanunu, Kişisel Verilerin Korunması Kanunu ve diğer mevzuat hükümlerinin izin verdiği
kurum veya kuruluşlar; Kişisel Verileri Koruma Kurumu, Maliye Bakanlığı, Gümrük ve Ticaret 
Bakanlığı, Çalışma ve Sosyal Güvenlik Bakanlığı, Bilgi Teknolojileri ve İletişim Kurumu gibi
kamu tüzel kişileri; bağlı ortaklıklarımız ve/veya doğrudan/dolaylı yurtiçi/yurtdışı
iştiraklerimiz; Apas Bilişim Mühendislik Limited Şirketi olarak faaliyetlerimizi yürütmek 
üzere ilgili sözleşmeler kapsamında hizmet aldığımız, işbirliği yaptığımız, her türlü 
kişisel verilerinizin muhafazası, yetkisiz erişimlerin önlenmesi ve hukuka aykırı olarak 
işlenmelerini önlemek gibi veri güvenliği tedbirlerinin alınmasında bizimle müşterek ve 
müteselsil sorumlu olan, program ortağı yurt içi/yurt dışı kuruluşlar ve diğer 3. kişilerdir.
Kişisel verileriniz sözlü, yazılı veya elektronik ortamda; web sitemiz, e-posta veya gibi
kanallar aracılığıyla toplanabilir.

KVKK’ nın 11. maddesi gereği Veri Sahibinin Hakları aşağıdaki gibidir :

a) Kişisel verilerinizin işlenip işlenmediğini öğrenme,

b) İşlenmişse bilgi talep etme,

c) İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,

ç) Yurt içinde/yurt dışında aktarıldığı 3. kişileri bilme,

d) Eksik/yanlış işlenmişse düzeltilmesini isteme,

e) KVKK’ nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme,

f) Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme hakkına sahipsiniz. Kişisel verilerinizle ilgili; yukarıda sıralanan haklarınıza yönelik başvurularınızı, “Veri Sahibi Başvuru Formu”nu kullanarak iletebilirsiniz. 6698 Sayılı Kişisel Verilerin Korunması Kanununun (KVK) 11. Maddesinde kişisel veri sahiplerine bazı haklar tanınmıştır. Veri sorumlusu olan Şirketimize bu haklara ilişkin olarak yapılacak başvuruların, KVK Kanunu’nun 13’üncü maddesinin birinci fıkrası uyarınca; Web Sitemizde yer alan “Veri Sahibi Başvuru formunu “doldurarak ve formun imzalı bir nüshasını ‘Fatih Mahallesi Gazi Ali Düşün Caddesi Can Apt. No 32/a Şehitkamil Gaziantep’ adresine kimliğinizi tespit edici belgeler ile bizzat elden iletebilir.Başvuru zarfının üzerine “Kişisel Veri Bilgi Talebi” yazılması zorunludur. Tarafımıza yapılan başvurulara talebinizin bize ulaştığı tarihten itibaren en geç 30 gün içerisinde yazılı ortamda dönüş yapılacaktır. İşbu AYDINLATMA METNİ şirketimiz ile imzalamış olduğunuz her türlü sözleşmesi ve hizmet alımına yönelik taleplerinizin eki ve ayrılmaz bir parçasıdır.`
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
                        <Text style={{ color: "white", textAlign: "left"}}>{item.desc}</Text>
                    </View>
                } />
        </LinearGradient>
    );
};
export default DataProtection;