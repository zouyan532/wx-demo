import React, {Component} from 'react';
import{View,Text,Image,TextInput,TouchableHighlightco} from 'react-native'
import styles from './Style'
class LoginInputText extends Component{
    constructor(props){
        super(props),
        this.state={
        }
    }
    _onChange=(params)=>{
        if(this.props.onChange){
            this.props.onChange(params)
        }
    }
    render(){
        return(
            <View style={styles.view_input}>
                <Image source={this.props.img} style={styles.img_icon}/>
                <TextInput 
                    placeholder={this.props.placeholder}
                    placeholderTextColor='#96aecf'
                    underlineColorAndroid='transparent'
                    style={styles.textInput}
                    onChangeText={this._onChange}
                    secureTextEntry={this.props.secureTextEntry?this.props.secureTextEntry:false}
                    />
                    
            </View>
        )
    }
}
export default LoginInputText;