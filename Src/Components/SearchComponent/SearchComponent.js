import React from "react";
import { TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './Search.style';

const SearchComponent = ({ placeholder, value, onChangeText, iconName, icoName, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
            />
            <Ionicons name={iconName} size={25} color="#757F9A" />
            <MaterialIcons name={icoName} size={25} color="black" />
        </View>
    )
}
export default SearchComponent;