import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../Pages/GetStarted/GetStarted';
import Select from '../Pages/Select/Select';
import Miktar from '../Pages/Miktar/Miktar';
import AnaSayfa from '../Pages/AnaSayfa/AnaSayfa';
import CevirSelect from '../Pages/CevirSelect/CevirSelect';
import KullanmaKılavuzu from '../Pages/KullanmaKılavuzu/KullanmaKılavuzu';
import Gizlilik from '../Pages/Gizlilik/Gizlilik';
import Colors from '../Utils/Colors';
import Ayarlar from '../Pages/Ayarlar/Ayarlar';
import AboutApas from '../Pages/AboutApas/AboutApas';
import ContactUs from '../Pages/ContactUs/ContactUs';
import CookiePolicy from '../Pages/CookiePolicy/CookiePolicy';
import DataProtection from '../Pages/DataProtection/DataProtection';
import İnformationForm from '../Pages/İnformationForm/İnformationForm';
import UserAgreement from '../Pages/UserAgreement/UserAgreement';

const Stack = createNativeStackNavigator();

export default function Navigation({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: false
            }}>
            <Stack.Screen name='GetStarted' component={GetStarted} />
            <Stack.Screen name='Select' component={Select} />
            <Stack.Screen name='Miktar' component={Miktar} />
            <Stack.Screen name='Ana Sayfa' component={AnaSayfa} />
            <Stack.Screen name='Çevir Select' component={CevirSelect} />
            <Stack.Screen
                name='Kullanma Kılavuzu'
                component={KullanmaKılavuzu}
                options={{
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }} />
            <Stack.Screen
                name='About Apas'
                component={AboutApas}
                options={{
                    headerShown: true,
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }} />
            <Stack.Screen
                name='Contact Us'
                component={ContactUs}
                options={{
                    headerShown: true,
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }} />
            <Stack.Screen
                name='Cookie Policy'
                component={CookiePolicy}
                options={{
                    headerShown: true,
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }} />
            <Stack.Screen
                name='Data Protection'
                component={DataProtection}
                options={{
                    headerShown: true,
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }} />
            <Stack.Screen
                name='İnformation Form'
                component={İnformationForm}
                options={{
                    headerShown: true,
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }} />
            <Stack.Screen
                name='User Agreement'
                component={UserAgreement}
                options={{
                    headerShown: true,
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }} />

            <Stack.Screen
                name='Ayarlar'
                component={Ayarlar}
                options={{
                    headerShown: true,
                    headerTitle: "Settings",
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }}
            />
            <Stack.Screen
                name='Gizlilik'
                component={Gizlilik}
                options={{
                    headerShown: true,
                    headerTitle: "Confidentiality Agreement",
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: Colors.headerBackground
                    }
                }}
            />

        </Stack.Navigator>
    )
}