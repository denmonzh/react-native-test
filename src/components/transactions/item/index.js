import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Font} from 'expo'
import {style} from "../style/style";
import TransactionItem from './item'
import month from '../month/month'

class TransactionGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null,
            today: false,
            month: month,

        }
    }


    componentDidMount() {


        const {index, item} = this.props;
        const {month} = this.state;

        if (index === 0) {
            this.setState({date: 'Today', today: true, loading: false})
        } else if (index === 1) {
            this.setState({date: 'Yesterday', loading: false})
        } else {
            let date = new Date(item[0].dateTime);
            this.setState({date: `${date.getDate()} ${month[date.getMonth()]}`, loading: false});
        }


    }


    render() {

        const {date, today, loading} = this.state;
        const {item} = this.props;

        return (

            <View style={style.mainContainerTransaction}>

                <View style={!today ? style.dayContainer : style.dayContainerFirst}>
                    <Text style={style.dateText}>{date}</Text>
                    {
                        today ? <TouchableOpacity>
                            <Text style={style.viewAllText}>View all</Text>
                        </TouchableOpacity> : null
                    }
                </View>
                {

                    item.map(item => (
                        <TransactionItem
                            key={item.id}
                            dateTime={item.dateTime}
                            currency={item.currency}
                            amount={item.amount}
                            description={item.description}
                            id={item.from}
                        />
                    ))
                }

            </View>
        )
    }
}

export default TransactionGroup;


