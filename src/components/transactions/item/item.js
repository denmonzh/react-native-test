import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import {style} from "../style/style";


import iconUp from "../icon/up.png";
import iconDown from "../icon/down.png"

class TransactionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: null,
            amountItem: null,
            icon: iconUp,
            changeDay: false,
            itemDate: null
        }
    }


    componentDidMount() {
        const {dateTime, currency, amount} = this.props;
        const {changeIcon} = this.state;
        const date = new Date(dateTime);
        const minutes = date.getMinutes();
        let newMinutesFormat;

        minutes < 10 ? newMinutesFormat = `0${minutes}`: newMinutesFormat = minutes;



        this.setState({
            change: false,
            changeDay: true,
            time: `${date.getHours()} : ${newMinutesFormat}`
        });

        this.handleCheckCurrency(currency, amount, changeIcon);


    }


    handleCheckCurrency(currency, amount) {
        let currencyItem;

        if (currency === 'USD') {
            currencyItem = '$'
        }

        if (amount < 0) {
            let newAmount = Math.abs(amount);
            this.setState({
                icon: iconDown,
                amountItem: `-${currencyItem}${newAmount}`

            })
        } else {
            this.setState({
                amountItem: `${currencyItem}${amount}`,
            })
        }

    }


    render() {

        const {time, amountItem, icon,} = this.state;
        const {description,id} = this.props;

        return (

            <View style={style.itemContainer}>
                <View style={style.timeFromContainer}>
                    <Image source={icon} style={style.fromImage}/>
                    <Text style={style.timeText}>{time}</Text>
                </View>
                <View style={style.detailsContainer}>
                    <Text style={style.detailsInfoText}>{description}</Text>
                    <Text style={style.deitailsNumberText}>{id}</Text>
                </View>
                <View style={style.currencyContainer}>
                    <Text style={style.currencyText}>{amountItem}</Text>
                </View>
            </View>

        )
    }
}

export default TransactionItem;