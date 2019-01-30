import React, {Component} from 'react'
import {View, ImageBackground, StyleSheet, TouchableHighlight, Text, Image} from 'react-native'
import {Font} from 'expo'

import logo from './template/card.png'
import icon from './icon/icon.png'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'open-sans': require('../../../assets/fonts/SourceSansPro-Regular.ttf'),
            'open-sans-bold': require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
            'ropa-sans': require('../../../assets/fonts/RopaSans-Regular.ttf')

        });

        this.setState({loading: false})
    }


    render() {

        const {loading} = this.state;

        return (
            <React.Fragment>
                {
                    !loading ? (
                        <View style={style.mainCardContainer}>
                            <ImageBackground source={logo} style={style.cardContainer}>

                                <View style={style.buttonContainer}>
                                    <TouchableHighlight style={style.buttonReissue}>
                                        <View style={style.buttonContentContainer}>
                                            <Image source={icon} style={style.icon}/>
                                            <Text style={style.textButton}>Reissue my</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>

                                <View style={style.currentBalanceContainer}>
                                    <View>
                                        <Text style={style.balanceText}>Current balance</Text>
                                    </View>
                                    <View>
                                        <Text style={style.CurrentText}>$1, 000.00</Text>
                                    </View>
                                </View>


                                <View style={style.cardNumberContainer}>
                                    <Text style={style.cardNumberText}>0000</Text>
                                    <Text style={style.cardNumberText}>****</Text>
                                    <Text style={style.cardNumberText}>****</Text>
                                    <Text style={style.cardNumberText}>0000</Text>
                                </View>

                                <View style={style.cardDetailsContainer}>
                                    <View>
                                        <Text style={style.cardNameText}>CORY GARDNER</Text>
                                    </View>
                                    <View>
                                        <Text style={style.cardDateText}>12/18</Text>
                                    </View>
                                </View>


                            </ImageBackground>

                        </View>
                    ) : null
                }
            </React.Fragment>


        )
    }
}


const style = StyleSheet.create({
    mainCardContainer: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    cardContainer: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        height: '100%',
    },

    buttonReissue: {
        borderRadius: 23,
        backgroundColor: '#eef7ff',
        width: 199,
        alignItems: 'center',
        height: 45
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingTop: 22,
        paddingRight: 20
    },

    buttonContentContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 45,
        width: '100%',
        flexDirection: 'row',

    },

    textButton: {
        fontWeight: '400',
        paddingLeft: 14,
        fontSize: 18,
        color: '#1f3e85',
        fontFamily: 'open-sans'
    },

    icon: {
        marginLeft: 22,
        width: 20,
        height: 26
    },

    currentBalanceContainer: {
        flex: 2,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },

    cardNumberContainer: {
        flexDirection: 'row',
        width: '65%',
        justifyContent: 'space-between',
        paddingLeft: 27,
        paddingBottom: 10
    },

    cardDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 25,
        paddingLeft: 27,
        width: '70%'
    },

    balanceText: {
        fontSize: 14,
        color: '#fff',
        paddingLeft: 5,
        fontFamily: 'open-sans'
    },

    CurrentText: {
        fontSize: 32,
        color: '#fff',
        paddingLeft: 5,
        fontWeight: '400',
        fontFamily:'open-sans-bold'
    },

    cardNumberText: {
        fontFamily: 'ropa-sans',
        fontSize: 18,
        opacity: 0.6,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#ffffff'
    },

    cardDateText: {
        fontFamily:'ropa-sans',
        fontSize: 18,
        opacity: 0.6,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#ffffff',
    },

    cardNameText: {
        fontFamily:'ropa-sans',
        fontSize: 18,
        opacity: 0.6,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#ffffff'
    }


});


export default Card