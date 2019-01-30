import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native'

import Card from './src/components/card/index'
import Description from './src/components/description/index'
import Transactions from "./src/components/transactions/index";
import FixedButton from "./src/components/fixedButton";
import Title from "./src/components/header";

class App extends Component {

    render() {
        return (
            <View style={style.mainContainer}>
                <Title/>
                <ScrollView style={style.mainContent}>
                    <Card/>
                    <Description/>
                    <Transactions/>
                </ScrollView>
                <FixedButton/>
            </View>
        );
    }
}




export default App;


const style = StyleSheet.create({
    mainContainer:{
        flex:1,

    },

    mainContent:{
        flex: 1
    }

});


