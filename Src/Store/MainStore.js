import { observable, action, makeObservable, values } from 'mobx'
import MainServices from '../Services/MainServices';
class MainStore {
    currencyList = [];
    selectCurrency = {};
    convertCurrency = {};
    Amount = null;
    constructor() {
        makeObservable(this, {
            currencyList: observable,
            selectCurrency: observable,
            Amount: observable,
            getCurrencyList: action,
            setCurrencyList: action,
            setSelect: action,
            setConvert: action,
            setAmount: action,
        })
    }

    convertDataToArray(data) {
        const newList = Object.entries(data).map((eleman) => {
            return { title: eleman[0], value: eleman[1] }
        })
        return newList;
    }

    setCurrencyList(data) {
        this.currencyList = data
    }

    getCurrencyList = async (text) => {
        this.setCurrencyList([])
        return await MainServices.getCurrencyList(text)
            .then(data => {
                return data.data.rates;
            }).then(data => {
                const newData = this.convertDataToArray(data);
                this.setCurrencyList(newData)
                return newData;
            })
            .catch(err => {
                console.log('error : ', err);
            })
    }

    setSelect(value) {
        this.selectCurrency = value
    }

    setConvert(value) {
        this.convertCurrency = value
    }
    setAmount(value) {
        this.Amount = value
    }

}
export default new MainStore()