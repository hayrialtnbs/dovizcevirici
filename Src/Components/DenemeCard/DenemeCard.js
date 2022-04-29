import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../../Styles/DenemeCardStyles/DenemeCard.style';

const DenemeCard = ({ home }) => {
    return (
        <TouchableWithoutFeedback >

            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Text style={styles.title} >  {home.rates.AUD} </Text>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
};


export default DenemeCard;