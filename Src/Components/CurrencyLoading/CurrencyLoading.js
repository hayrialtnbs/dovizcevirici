import React from 'react';
import LottieView from 'lottie-react-native';
import CurrencyLoadingStyles from './CurrencyLoading.styles';

function CurrencyLoading() {
       return <LottieView  source={require('../../Assets/currencyLoading.json')} autoPlay  style={CurrencyLoadingStyles.container} />

};
export default CurrencyLoading;