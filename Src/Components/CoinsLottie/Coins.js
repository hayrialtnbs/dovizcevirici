import React from "react";
import LottieView from 'lottie-react-native';
import styles from "../../Styles/LottieStyles/Lottie.Styles";
function Coins() {

    return <LottieView source={require('../../Assets/coin.json')} autoPlay={true} style={styles.lottie} />;
}

export default Coins;