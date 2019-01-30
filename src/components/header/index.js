import React, {Component} from 'react'
import {Header} from 'react-native-elements'




class Title extends Component{
    render(){
        return(
            <Header
                containerStyle={{
                    backgroundColor: '#fff',

                }}
                placement='center'
                centerComponent={{text: 'My card', style: {color: '#263550', fontSize: 18}}}
            />
        )
    }
}

export default Title