import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import {Buttons} from '../../Styles/GetButtonsStyles/GetButtons.Styles';

const GetButtons = ({ text, onPress, style = Buttons, loading }) => {
    return (
        <TouchableOpacity style={style.container} onPress={onPress} disabled={loading}>
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text style={style.title}>{text}</Text>
            )}

        </TouchableOpacity>
    );
};

export default GetButtons;
