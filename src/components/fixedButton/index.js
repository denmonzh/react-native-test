import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'


class FixedButton extends Component {
    render() {
        return (
            <TouchableOpacity style={style.fixedButtonContainer}>
                <View style={style.lineContainer}>
                    <View style={style.buttonLine}/>
                    <View style={style.buttonLine}/>
                    <View style={style.buttonLine}/>
                </View>
            </TouchableOpacity>
        )
    }
}

export default FixedButton;

const style = StyleSheet.create({

    fixedButtonContainer: {
        height: 55,
        width: 55,
        backgroundColor: '#39b54a',
        shadowColor: 'rgba(57, 181, 74, 0.6)',
        shadowRadius: 10,
        shadowOffset: {width: 1, height: 2},
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 30,
        opacity: 0.9,
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },


    lineContainer:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap:'wrap',
        width:'100%',
        height:'65%'
    },


    buttonLine: {
        height: 1,
        width:24,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor:'#fff'
    }

});