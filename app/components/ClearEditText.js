import React, {Component} from 'react';
import{View,Text,TextInput,TouchableHighlightco} from 'react-native'
import styles from './Style'
class ClearEditText extends Component{
    constructor(props){
        super(props),
        this.state={

        }
    }
    onChange=(params)=>{
        if(this.props.onChange){
            this.props.onChange(params)
        }
    }
    render(){
        return(
            <View style={styles.view_input}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.onChange}
                    value={this.props.tab}/>
                {/* <Text >删除</Text> */}
            </View>
        )
    }
}
export default ClearEditText;