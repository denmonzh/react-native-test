import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({

    descriptionMainContainer: {
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    itemContainer: {
        flexDirection: 'row',
        width: '92%',
        height: 60,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderBottomColor: '#C0C0C0',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 1
    },

    timeFromContainer: {
        flexDirection: 'column',
        width: '20%',
        height: '100%',
        justifyContent: 'center',



    },

    fromImage: {
        width: 30,
        height: 30
    },

    timeText: {
        color: '#263550',
        fontSize: 10,
        fontWeight: '300'
    },

    detailsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
        height: '100%',
        paddingBottom: 10,

    },

    detailsInfoText: {
        fontSize: 16,
        color: '#263550',
        fontWeight: '400'
    },

    deitailsNumberText: {
        opacity: 0.7,
        fontSize: 12,
        fontWeight: '400'

    },

    currencyContainer: {
        width: '20%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',


    },

    currencyText: {
        fontSize: 14,
        color: '#263550',
        fontWeight: '400'
    },

    dayContainer: {
        flexDirection:'row',

        width:'93%',
        height: 20,
        alignItems:'center',
        justifyContent:'flex-start'
    },

    dateText: {
        fontSize: 12,
        fontWeight:'500',
        color: '#263550',
    },

    dayContainerFirst: {
        width:'93%',
        height: 20,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection:'row'
    },

    viewAllText:{
        color: '#263550',
        fontWeight: '400',
        fontSize: 16
    },

    mainContainerTransaction: {
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10

    }





});