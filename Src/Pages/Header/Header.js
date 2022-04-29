import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../Styles/MySearchStyles/MySearch.styles';

const Header = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>To Currency</Text>
            </View>
        </View>
    )
}
export default Header;