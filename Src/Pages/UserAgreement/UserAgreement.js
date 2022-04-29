import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/GizlilikStyles/Gizlilik.styles';

const UserAgreement = () => {

    const Data = [
        {
            id: 0,
            desc:
                `1. Taraflar
İşbu sözleşme ve sözleşmeyle atıfta bulunulan ve sözleşmenin ayrılmaz birer parçası olan eklerden
(EK–1 Gizlilik Politikası) oluşan işbu Cimri Üyelik Sözleşmesi (bundan böyle “üyelik Sözleşmesi”
olarak anılacaktır), Cimri Bilgi Teknolojileri ve Sistemleri A.Ş 
(bundan böyle Cimri olarak anılacaktır) ile www.cimri.com sitesine işbu Üyelik
Sözleşmesi’nde belirtilen koşullar dahilinde kayıt olan Üye arasında, Üye’nin
elektronik olarak onay vermesi ile karşılıklı olarak kabul edilerek ve 4. 
maddedeki şarta bağlı olarak yürürlüğe girmiştir.

Üye, işbu Üyelik Sözleşmesini kabul etmeden önce, https://www.cimri.com/kullanici-sozlesmesi
bağlantısından ulaşılan ve indirilebilen, ticari amaçlarla verilen sözleşme öncesi
bilgilendirme metnini okuyup incelediğini,şartlarınıanladığını, bilgilendirme 
metnini bilgisayarına indirebildiğini ve sözleşme öncesi bilgilendirme yükümlülüğünün 
kendisine karşı tam olarak yerine getirildiğini, sözleşme ile ilgili ön bilgileri 
edindiğini teyit ettiğini beyan ve kabul eder.

Üye, Üyelik Sözleşmesi sürecine ilişkin işlemleri tamamlayarak işbu Üyelik Sözleşmesinin
tamamını okuduğunu, içeriğini tamamen anladığını, kendisi ile ilgili olarak verdiği
bilgilerin doğru ve güncel olduğunu ve Üyelik Sözleşmesinde belirtilen ve Web Sitesi’nde
de yer alan işbu Üyelik Sözleşmesi konusu ile ilgili tüm hususları kayıtsız ve şartsız
olarak kabul ettiğini ve onayladığını, bu hususlar ile ilgili olarak herhangi bir 
itiraz ve defi ileri sürmeyeceğini şimdiden beyan, kabul ve taahhüt eder. Üye, Üyelik
Sözleşmesi konusunu oluşturan hizmetin içeriği, esaslı nitelikleri, özellikleri, 
ücret talep edilmediği ile ilgili bilgileri okuyup hizmetler hakkında gerekli tüm 
bilgilere sahip olduğunu, bu bilgiler doğrultusunda elektronik ortamda Üyelik 
Sözleşmesinenilişkin gerekli onayı verdiğini beyan, kabul ve taahhüt eder.

Bu sözleşmeyi bilgisayarınıza indirebilir ve elektronik ortamda kaydedebilirsiniz.
Üye, işbu Üyelik Sözleşmesi metnini bilgisayarına indirdiğini ve Üyelik Sözleşmesinin
bu şekildekalıcı veri saklayıcısı ile kendisine verildiğini beyan ve kabul eder.
Üye tarafından onaylanarak kabul edilen işbu Üyelik Sözleşmesi Cimri tarafından 
saklanmamaktadır. Web Sitesi’nde yer alan standart sözleşmeye her zaman ulaşmanız 
mümkündür. Ancak, standart sözleşmede değişiklikler yapılmış olabileceğinden,
Üye’nin onayladığı metne göre farklılıklar içerebilir. Üye’nin onayladığı metne 
daha sonra ulaşma imkanı bulunmamaktadır.

Cimri’nin 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırladığı,
kişisel verilerin işlenmesi ile ilgili aydınlatma metni Web Sitesi’nde yayınlanmaktadır. 
Üye, anılanaydınlatma metnini ve gizlilik politikasını okuyup incelediğini, Cimri’nin ilgili
kanun kapsamındaki aydınlatmayükümlülüğünü kendisine karşı yerine getirdiğini beyan ve kabul eder.

2. Tanımlar
Cimri: Cimri Bilgi Teknolojileri ve Sistemleri A.Ş.

Üye: Site’ye üye olan ve Site’de sunulan Hizmet’lerden, işbu sözleşmede belirtilen 
koşullar dahilinde yararlanan, sitedeki ürünlere yorum yapan gerçek veya tüzel kişi.

Kullanıcı(lar): Site'ye çevrimiçi (on-line) ortamdan erişen gerçek ve tüzel kişi(ler);

Site veya Web Sitesi: www.cimri.com isimli alan adından ve bu alan adına bağlı alt alan adlarından oluşan web sitesi

Satıcı(lar): Satıcıların kendi internet sitelerinde satışa sunduğu mal ve ürünler
hakkındaki açıklayıcı bilgilerin ve satış koşullarının Site üzerinden Kullanıcılar’a
ve Üyeler’e liste halinde sunulmasını sağlamak amacıyla Cimri ile Satıcı sözleşmesi
imzalayan gerçek ve/veya tüzel kişi(ler);

Cimri Hizmetleri (Kısaca "Hizmet"): Üyeler’ in Üyelik Sözleşmesi’nde tanımlı olan 
iş ve işlemlerini gerçekleştirmelerini sağlamak amacıyla, Cimri tarafından, Site içerisinde ortaya konulan uygulamalar

3. Sözleşmenin Konusu ve Kapsamı
Üyelik Sözleşmesi’nin konusu, Site’de sunulan Hizmet’lerin, bu Hizmet’lerden yararlanma
şartlarının ve tarafların hak ve yükümlülüklerinin tespitidir. Üye, Üyelik Sözleşmesi’nin
hükümlerini kabul etmekle, Site içinde yer alan, kullanıma kurallarını, üyeliğe ve Hizmet’lere 
ilişkin olarak Cimri tarafından açıklanan her türlü usul, kural ve beyanı da kabul etmiş olmaktadır.
Üye, bahsi geçen usul, kural ve beyanlarda belirtilen her türlü hususa uygun olarak 
davranacağını kabul, beyan ve taahhüt eder.

4. Üyelik ve Hizmet Kullanımı Şartları
Web Sitesi, internet üzerinden çeşitli ürünlerin fiyat ve diğer özelliklerinin 
karşılaştırılması hizmeti verilen elektronik bir platformdur. Çeşitli mal ve 
hizmetlerin satışı işiyle uğraşan firmalar (Satıcılar), daha geniş bir tüketici 
kitlesine ulaşmak amacıyla, kendi kendi ürünlerinin Web Sitesinde gösterilmesi için Site’ye
üye olarak bu hizmetten yararlanabilmektedirler. Şirketimiz hiçbir ürünün satıcısı veya 
üreticisi değildir ve ürün satışı veya üretimi ile iştigal etmemektedir. İnternet sitemizde de
hiçbir ürün satışı yapılmamaktadır. Şirketimiz, tüketicilere ürün veya hizmet satışı
zincirinin hiçbir aşamasında yer almamaktadır. Cimri, Üye ile Satıcılar arasındaki 
ilişkiler nedeniyle hiçbir şekilde sorumlu tutulamaz. Cimri, hiçbir şekilde, Satıcıların 
Üye ile sözleşme yapacaklarını, iyi niyetli olduklarını, borçlarını ifa kabiliyetlerinin
varlığını, borçlarının ifasını, beyanlarının doğruluğunu, işlem yapmaya yetkili olduklarını,
sağlanan mal ve hizmetlerin ayıpsız olacağını ve benzer diğer hususları garanti etmez. Cimri,
Üye’nin Site vasıtasıyla ulaştığı Satıcılarla gireceği hukuki ilişkilere tamamen yabancıdır 
ve bunlara ilişkin hiçbir sorumluluğu yoktur. Sorumluluğun tamamı işlemin tarafı olan Satıcılara 
ve Üye’ye aittir. 5651 sayılı yasa kapsamında “Yer Sağlayıcı” statüsünde olan Cimri, Satıcılar 
tarafından sağlanan içeriği kontrol etmek veya hukuka aykırı bir faaliyetin olup olmadığını 
araştırmakla yükümlü değildir.

Üyelik, Site’nin ilgili bölümünden, veya sitedeki ürünlere yorum yapmak suretiyle,
Üye olmak isteyen kişi tarafından Site’ye üye olmak için gerekli kimlik bilgilerinin 
gönderilmesi suretiyle kayıt işleminin yaptırılması ve Cimri tarafından kayıt işleminin
onaylanması ile tamamlanır. Üyelik işlemi tamamlanmadan, işbu sözleşmede tanımlanan
Üye olma hak ve yetkisine sahip olunamaz.

Üye’nin Hizmetlerden yararlanması ücretsizdir. Cimri, ilerde Hizmetleri ücretli hale 
getirme ve/veya ücret karşılığı Hizmetler ilave etme hakkınısaklı tutar.

5. Tarafların Hak ve Yükümlülükleri
5.1 Üye, üyelik prosedürlerini yerine getirirken, Site’nin Hizmet’lerinden faydalanırken
ve Site’deki Hizmet’lerle ilgili herhangi bir işlemi yerine getirirken, Üyelik Sözleşmesi’nde
yer alan tüm şartlara, Site’nin ilgili yerlerinde belirtilen kurallara ve yürürlükteki 
tüm mevzuata uygun hareket edeceğini, yukarıda belirtilen tüm şart ve kuralları anladığını
ve onayladığını kabul, beyan ve taahhüt eder.

5.2 Üye, yürürlükteki emredici mevzuat hükümleri gereğince veya diğer üyeler ve Kullanıcılar
ile üçüncü şahısların haklarının ihlal edildiğinin iddia edilmesi durumlarında, 
Cimri’nin kendisine ait gizli/özel/ticari bilgileri gerek resmi makamlara ve gerekse 
hak sahibi kişilere açıklamaya yetkili olacağını ve bu sebeple Cimri’den her ne nam 
altında olursa olsun tazminat talep edilemeyeceğini kabul, beyan ve taahhüt eder.

5.3 Üyeler’in Cimri tarafından sunulan Hizmet’lerden yararlanabilmek amacıyla kullandıkları
sisteme erişim araçlarının (Kullanıcı ismi, şifre v.b.) güvenliği, saklanması, üçüncü
kişilerin bilgisinden uzak tutulması ve kullanılması durumlarıyla ilgili hususlar 
tamamen Üyeler’in sorumluluğundadır. Üyeler’in, sisteme giriş araçlarının güvenliği, 
saklanması, üçüncü kişilerin bilgisinden uzak tutulması, kullanılması gibi hususlardaki
tüm ihmal ve kusurlarından dolayı Üyeler’in ve/veya üçüncü kişilerin uğradığı veya 
uğrayabileceği zararlara istinaden Cimri’nin, doğrudan veya dolaylı, herhangi bir sorumluluğu yoktur.

5.4 Üyeler, Cimri’nin yazılı onayı olmadan, Üyelik Sözleşmesi kapsamındaki hak ve 
yükümlülüklerini, kısmen veya tamamen, herhangi bir üçüncü kişiye devredemezler.

5.5 Cimri, Üyeler’in Site’de listelenmesine yer verilen ürün açıklamalarına ulaşmasını ve 
ürünlerin renk, model, cins, vasıf, nitelik ve/veya özellikleri ile ilgili her türlü 
karşılaştırılmanın yapılmasını sağlayacaktır. Cimri, Üyeler’in Üyelik Sözleşmesi’nde tanımlı 
olan iş ve işlemleri daha etkin şekilde gerçekleştirebilmelerini sağlamak üzere, dilediği zaman 
Hizmet’lerinde değişiklikler ve/veya uyarlamalar yapabileceği gibi ek Hizmetler de sunabilir. 
Cimri tarafından yapılan bu değişiklikler ve/veya uyarlamalar ve/veya eklenen yeni Hizmetler 
Cimri tarafından, ilgili Hizmet’in kullanımıyla ilgili açıklamaların bulunduğu web web sayfasından Üyeler’e duyurulur.

5.6 Cimri’nin sunduğu Hizmet’lerden yararlananlar ve Site’yi kullananlar, yalnızca hukuka 
uygun amaçlarla Site üzerinde işlem yapabilirler. Üyeler’in, Site dahilinde yaptığı her 
işlem ve eylemdeki hukuki ve cezai sorumluluk kendilerine aittir. Her Üye, Cimri ve/veya 
başka bir üçüncü şahsın ayni veya şahsi haklarına veya malvarlığına tecavüz teşkil edecek 
şekilde, Site dahilinde bulunan resimleri, metinleri, görsel ve işitsel imgeleri, video 
kliplerini, dosyaları, veritabanlarını, katalogları ve listeleri çoğaltmayacağını, 
kopyalamayacağını, dağıtmayacağını, işlemeyeceğini, gerek bu eylemleri ile gerekse de 
başka yollarla Cimri ile doğrudan ve/veya dolaylı olarak rekabete girmeyeceğini kabul, 
beyan ve taahhüt eder. Cimri, Üyeler’in Üyelik Sözleşmesi hükümlerine ve/veya hukuka 
aykırı olarak Site üzerinde gerçekleştirdikleri faaliyetler nedeniyle üçüncü kişilerin 
uğradıkları veya uğrayabilecekleri zararlardan doğrudan ve/veya dolaylı olarak, hiçbir şekilde sorumlu tutulamaz.

5.7 Cimri, Site’de sunulan Hizmetler’i ve içerikleri her zaman değiştirebilme; işbu 
içerikleri Üyeler ve Siteyi kullananlar da dahil olmak üzere, üçüncü kişilerin erişimine 
kapatabilme ve silme hakkını saklı tutmaktadır. Cimri, bu hakkını hiçbir bildirimde 
bulunmadan ve önel vermeden kullanabilir.

5.8 Cimri, Site’de yer alan Üye bilgilerini, üye güvenliği, kendi yükümlülüğünü ifa ve 
bazı istatistiki değerlendirmeler için dilediği biçimde kullanabilir. Bunları bir 
veritabanı üzerinde tasnif edip muhafaza edebilir.

5.9 Üyeler; Site üzerinden erişim verilen ürünlerin satışının gerçekleşeceği Satıcılar’a 
ait internet sitelerinde, Satıcılar tarafından satışa arz edilen ürün/ürünler ve/veya 
yayınlanan içerik/içeriklerden dolayı Cimri’nin, Cimri çalışanlarının ve yöneticilerinin 
hiçbir şekilde sorumluluğu bulunmadığını kabul, beyan ve taahhüt eder.

5.10 Üyeler; Siteye üye olarak sitenin bilgilendirme amaçlı e-mail göndermesini kabul eder. 
Sitedeki ürünlere yorum yazan kullanıcıların e-mail adreslerinin ve/veya içeriklerinin 
kullanım hakkı Cimri.com’da saklı olup Üye, Cimri.com’dan e-mail almayı kabul etmiş sayılmaktadır.

6. Gizlilik Politikası
Cimri, Üyeler’e ilişkin bilgileri, işbu sözleşmenin EK-1 Gizlilik Politikası bölümündeki 
düzenlemelere uygun olarak kullanabilir. Cimri, Üyeler’e ait gizli bilgileri, Üyelik 
Sözleşmesi’nde aksine müsaade edilen durumlar haricinde, üçüncü kişi ve kurumlara kullandırmaz.

7. Diğer Hükümler
7.1. Fikri Mülkiyet Hakları
a) Site’nin tasarım, metin, imge, html kodu ve diğer kodlar da dahil ve fakat bunlarla 
sınırlı olmamak kaydıyla tüm unsurları (bundan böyle “Cimri’nin Telif Haklarına Tabi 
Çalışmalar” olarak anılacaktır) Cimri’ye aittir ve/veya Cimri tarafından üçüncü bir 
kişiden alınan lisans hakkı altında kullanılmaktadır. Üyeler, Hizmetler’i, Cimri 
bilgilerini ve Cimri’nin Telif Haklarına Tabi Çalışmaları’nı yeniden satamaz, paylaşamaz,
dağıtamaz, sergileyemez veya başkasının Hizmetler’e erişmesine veya kullanmasına izin
veremez. Aksi takdirde, lisans verenler de dahil üçüncü kişilerin ve Cimri’nin uğradıkları 
zararları ve/veya bu zararlardan dolayı Cimri’den talep edilen tazminat miktarını, mahkeme 
masrafları ve avukatlık ücreti de dahil olmak üzere, karşılamakla yükümlü olacaklardır. 
Üyeler, Cimri’nin Telif Haklarına Tabi Çalışmaları’nı çoğaltamaz, dağıtamaz veya bunlardan 
türemiş çalışmalar yapamaz veya hazırlayamaz.

b) Cimri’nin, Hizmetler’i, bilgileri, Cimri Telif Haklarına Tabi Çalışmaları, ticari 
markaları, ticari görünümü veya Site vasıtasıyla sahip olduğu her tür maddi ve fikri
mülkiyet hakları da dahil tüm malvarlığı, ayni ve şahsi hakları, ticari bilgi ve 
know-how'a yönelik tüm hakları saklıdır.

7.2. Sözleşme Değişiklikleri
Cimri, tamamen kendi takdirine bağlı ve tek taraflı olarak, işbu Üyelik Sözleşmesi’ni, 
uygun göreceği herhangi bir zamanda, Site’de ilan etmek suretiyle değiştirebilir. 
İşbu Üyelik Sözleşmesi’nin değişen hükümleri, ilan edildikleri tarihte geçerlilik 
kazanacak; geri kalan hükümler, aynen yürürlükte kalarak hüküm ve sonuçlarını 
doğurmaya devam edecektir. İşbu Üyelik Sözleşmesi, Üye’nin tek taraflı beyanları 
ile değiştirilemez.

7.3. Mücbir Sebepler
Hukuken mücbir sebep sayılan tüm durumlarda, Cimri, işbu sözleşme ile belirlenen 
edimlerinden herhangi birini geç veya eksik ifa etme veya ifa etmeme nedeniyle yükümlü 
değildir. Bu ve bunun gibi durumlar, Cimri için, gecikme, eksik ifa etme veya ifa etmeme 
veya temerrüt addedilmeyecek veya bu durumlar için Cimri 'den herhangi bir nam altında 
tazminat talep edilemeyecektir. "Mücbir sebep" terimi, doğal afet, isyan, savaş, grev, 
iletişim sorunları, altyapı ve internet arızaları, elektrik kesintisi ve kötü hava koşulları
da dahil ve fakat bunlarla sınırlı olmamak kaydıyla, ilgili tarafın makul kontrolü 
haricinde ve Cimri'nin gerekli özeni göstermesine rağmen önleyemediği, kaçınılamayacak 
olaylar olarak yorumlanacaktır.

7.4. Uygulanacak Hukuk ve Yetki
İşbu Kullanıcı Sözleşmesi’nin uygulanmasında, yorumlanmasında ve hükümleri dahilinde doğan 
hukuki ilişkilerin yönetiminde Türk Hukuku uygulanacaktır. İşbu Kullanıcı Sözleşmesi’nden 
doğan veya doğabilecek her türlü ihtilafın hallinde, İstanbul Anadolu Mahkemeleri ve İcra Daireleri yetkilidir.

7.5. Sözleşmenin Feshi
İşbu Üyelik Sözleşmesi, süresiz olarak düzenlenmiştir. Cimri.com herhangi bir süre 
tayinine gerek olmaksızın istediği zaman sözleşmeyi fesih hakkına sahiptir.

Cimri, Üyeler’in işbu Üyelik Sözleşmesi’ni ve/veya, Site içinde yer alan kullanıma, 
üyeliğe ve Hizmet’lere ilişkin benzeri kuralları ihlal etmeleri durumunda ve özellikle 
aşağıda sayılan hallerde, sözleşmeyi tek taraflı olarak feshedebilecek ve Üyeler, fesih 
sebebiyle, Cimri’nin uğradığı tüm zararları tazmin etmekle yükümlü olacaktır:

a) Üye’nin, herhangi bir yöntem kullanarak, Site’nin işleyişini manipüle edecek davranışlarda bulunması,

b) Site dahilinde bulunan resimleri, metinleri, görsel ve işitsel imgeleri, dosyaları, 
veritabanlarını, katalogları ve listeleri izinsiz olarak çoğaltması, kopyalaması, dağıtması ve işlemesi;

c) Üye’nin diğer Üye ve/veya kullanıcıların ve/veya üçüncü kişilerin ve/veya hak 
sahiplerinin haklarına tecavüz eden ve/veya etme tehlikesi bulunan fillerde bulunması.

7.6. Sözleşmenin Süresi
İşbu Sözleşme süresiz olarak düzenlenmiştir. Taraflardan her biri istediği zaman sözleşmeyi fesih hakkına sahiptir.

7.7. Cayma Hakkı
Üye işbu Üyelik Sözleşmesini elektronik ortamda kabul ettiği tarihten itibaren 14 
(on dört) gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin
sözleşmeden cayma hakkına sahiptir. Cayma hakkının kullanıldığına dair bildirim bu 
süre içinde yazılı olarak veya veya desktek@cimri.com adresine e-posta gönderilmesi
suretiyle yapılabileceği gibi Üyenin cayma kararını bildiren açık bir beyanının süresi 
içinde Cimri’ye iletilmesi suretiyle de kullanılabilir. Cayma hakkını kullanmak veya üyeliğini 
sonlandırmak isteyen Üye profil sayfalarından üyelikten ayrıl seçeneği ile veya “destek@cimri.com” 
mail adresine üyeliğini sonlandırmak istediklerine dair mail atarak da Üyelik Sözleşmesini
feshedebilir ve üyelikten ayrılabilir.`
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
export default UserAgreement;