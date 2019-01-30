import React, {Component} from 'react'
import {View} from 'react-native'
import {style} from './style/style'
import {json} from "./data";

import TransactionGroup from "./item";


class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            changeDay: false
        }
    }

    componentDidMount() {
        const dates = json.map(item => this.handleFormatDates(item.dateTime));
        const uniqueDates = [...new Set(dates)];
        const data = uniqueDates.map(item => {
            return {
                date: item,
                item: json.filter(i => this.handleFormatDates(i.dateTime) === item)
            }
        });
        this.setState({data: data})
    }


    handleFormatDates(item) {
        const tmp = new Date(item);
        return `${tmp.getFullYear()} - ${tmp.getMonth() + 1} - ${tmp.getDate()}`
    }


    render() {

        const {data} = this.state;

        return (
            <View style={style.descriptionMainContainer}>
                {
                    data.map((item, index) => (
                        <TransactionGroup
                            key={index}
                            index={index}
                            date = {item.date}
                            item = {item.item}
                        />
                    ))
                }
            </View>
        )
    }
}


export default Transactions



