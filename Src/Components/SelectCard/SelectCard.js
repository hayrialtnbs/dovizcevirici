import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './SelectCard.styles';



const SelectCard = ({ item, onSelect }) => {
    return (

        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <View style={styles.card}>
                
            </View>
        </TouchableOpacity>
    );
};
export default SelectCard;