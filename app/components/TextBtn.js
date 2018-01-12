import React, {Component} from 'react';
import{View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from './Style'
class TextBtn extends Component{
    constructor(props){
        super(props),
        this.state={

        }
    }
    onWare=(params)=>{
        if(this.props.onPressWare){
            this.props.onPressWare(params)
        }
    }
    onPersonal=(params)=>{
        if(this.props.onPressInfo){
            this.props.onPressInfo(params)
        }
    }
    render(){
        return(
            // <TouchableHighlight style={this.props.selectIndex===1?styles.selectedBtn:styles.unSelectBtn} onPress={this.onBtnPress}>
            //     <Text style={styles.btnText} >{this.props.text}</Text>
            // </TouchableHighlight>
            <View style={styles.btnCantainer}>  
                <TouchableHighlight style={this.props.selectIndex===1?styles.selectedBtn:styles.unSelectBtn}  onPress={this.onWare}>
                    <Text  style={styles.btnText} >仓库</Text>
                </TouchableHighlight>
                <TouchableHighlight style={this.props.selectIndex===2?styles.selectedBtn:styles.unSelectBtn} onPress={this.onPersonal}>
                    <Text  style={styles.btnText} >个人</Text>
                </TouchableHighlight> 
                </View>
        )
    }
}
export default TextBtn;