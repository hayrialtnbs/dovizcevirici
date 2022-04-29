import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import styles from '../../Styles/SelectStyles/Select.styles';
import MainStore from '../../Store/MainStore';
import { observer } from 'mobx-react';
import LinearGradient from 'react-native-linear-gradient';
import MySearch from '../MySearch/MySearch';
import { APİ_URL } from '../../Utils/ApiUrls';
import useFetch from '../../hooks/useFetch/useFetch';
import CurrencyLoading from '../../Components/CurrencyLoading/CurrencyLoading';
import Colors from '../../Utils/Colors';

const Select = (props) => {
    const { loading } = useFetch(APİ_URL);

    useEffect(() => {
        MainStore.getCurrencyList();
    }, [])

    const handle = (data) => {
        MainStore.setSelect(data)
        props.navigation.navigate('Miktar')
    }

    if (loading) {
        return (
            <CurrencyLoading />
        )
    }
    return (
        <LinearGradient
            colors={['#0F2027', '#203A43', '#2C5364']}
            style={styles.container} >
            <StatusBar backgroundColor={Colors.headerBackground} barStyle="dark-content" />

            <FlatList
                data={MainStore.currencyList}
                ListHeaderComponent={MySearch}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.cardContainer} onPress={() => handle(item)}>
                        <Text style={{ color: "white" }}>{item.title}</Text>
                        <View style={{ alignItems: "flex-end", right: 15, }}>
                            <Text style={{ color: "white" }}>{item.value}</Text>
                        </View>
                    </TouchableOpacity>} />
        </LinearGradient>
    );
};
export default observer(Select);