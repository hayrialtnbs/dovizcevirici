import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../Styles/MySearchStyles/MySearch.styles';

const MySearch = () => {

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>From Currency</Text>
            </View>
        </View>
    )
}
export default MySearch;