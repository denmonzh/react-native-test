import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'

import {Font} from 'expo'

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }


    async componentDidMount(){
        await Font.loadAsync({
            'open-sans': require('../../../assets/fonts/SourceSansPro-Regular.ttf')
        });

        this.setState({loading:false})
    }


    render() {

        const {loading} = this.state;

        return (

            <View style={style.descriptionMainContainer}>
                {
                    !loading ? (
                        <View style={style.descriptionTextContainer}>
                            <Text style={style.textDecoration}>Last</Text>
                            <Text style={style.textDecoration}>Details</Text>
                            <Text style={style.textDecoration}>Transfer</Text>
                        </View>
                    ) : null
                }

            </View>
        )
    }
}


export default Description


const style = StyleSheet.create({

    descriptionMainContainer: {
        width: '100%',
        backgroundColor: '#ffff',
        justifyContent:'center',
        flexDirection: 'row',
    },

    descriptionTextContainer: {
        flexDirection:'row',
        width: '93%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'space-between'

    },

    textDecoration: {
        fontSize: 18,
        fontWeight: '400',
        color: '#263550',
        fontFamily:'open-sans'
    }


});
