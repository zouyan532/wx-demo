import React from 'react';
import { KeyboardAvoidingView,View,ToastAndroid,Image, Text, StyleSheet,ScrollView, TextInput,TouchableHighlight,FlatList } from 'react-native';
import LoginInputText from '../../components/LoginInputText';
import {connect} from 'dva';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems:'center',
    },
    img_top_bg:{
        height: 200,
        width: '100%',
    },
    img_logo:{
        height: 89,
        width: 89,
        marginTop: -45,
    },
    text_wel:{
        fontSize: 21,
        color: '#007eff',
        marginTop:  22,
    },
    view_vcode:{
        flexDirection:'row',
        width:"80%",
    },
    vCodeBtn:{
        backgroundColor:'#8dcfff',
        height:45,
        marginLeft:10,
        justifyContent: 'center',  
    },
    vcodeText:{
        fontSize:15,
        alignItems:'center',
        color:'white',
        textAlign:'center', 
    },
    view_btn_vcode:{
        height:45,
        width:'20%',
        marginTop:20,
        justifyContent: 'center',  
    },
    btn_login:{
        backgroundColor:'#007eff',
        marginTop:35,
        height:45,
        justifyContent: 'center',  
    },
    view_login:{
        width:'80%',
        marginTop:20,
        height:45,
        marginBottom:40,
        justifyContent: 'center',  
    }

});

class Demo extends React.Component {
    constructor(props){
        super(props),
        this.state={
            shipNumber:"",
            password:"",
            phone:"",
            vCode:"",
            _index:10,
            vcodeBtnText:'验证码'
        }
    }

    _timer=null

    componentWillMount(){//使用的到
    }
    
    componentWillUnmount(){
        this._timer && clearInterval(this._timer);  
    }

    onShipNumberChange=(param)=>{
        this.setState({
            shipNumber:param
        });
    }
    onPasswordChange=(param)=>{
        this.setState({
            password:param
        })
    }
    onPhoneChange=(param)=>{
        this.setState({
            phone:param
        })
    }
    onVCodeChange=(param)=>{
        this.setState({
            vCode:param
        })
    }
    vCodeOnPress=(param)=>{
        if(this.state._index>=10){
            this._timer = setInterval(()=>{
                this.setState({
                    _index:this.state._index-1,
                    vcodeBtnText:this.state._index+'s'
                })
                if(this.state._index<=0){
                    this._timer&&clearInterval(this._timer)
                    this.setState({
                        _index:10,
                        vcodeBtnText:'重新获取'
                    })
                }
            },1000)
        }
    }
    loginOnPress=(param)=>{
        console.log(this.state.password)
        if(this.state.shipNumber==""){
            ToastAndroid.show('请输入船号',ToastAndroid.SHORT)
            return
        }
        if(this.state.password===""){
            ToastAndroid.show('请输入密码', ToastAndroid.SHORT)
            return
        }
        if(this.state.phone===""){
            ToastAndroid.show('请输入密手机号', ToastAndroid.SHORT)
            return
        }
        if(this.state.vCode===""){
            ToastAndroid.show('请输入验证码', ToastAndroid.SHORT)
            return
        }
        this.props.dispatch({
            type:'demo/getToken',
            shipNumber:this.state.shipNumber,
            password:this.state.password,
            phone:this.state.phone,
            vCode:this.state.vCode,
       })     
    }
    render() {
      
        return (
            <ScrollView>
                <KeyboardAvoidingView behavior='position'>  
                    <View style={styles.container}  >
                        <Image source={require('../../image/login_top_bg.png')} style={styles.img_top_bg}/>
                        <Image source={require('../../image/login_logo.png')} style={styles.img_logo}/>
                        <Text style={styles.text_wel}>欢迎使用船坞App</Text>
                        <LoginInputText 
                            placeholder="请输入您的船舶号"
                            onChange={this.onShipNumberChange}
                            img={require('../../image/login_ship_num.png')}>
                        </LoginInputText>
                        <LoginInputText 
                            placeholder="请输入您密码"
                            onChange={this.onPasswordChange}
                            secureTextEntry={true}
                            img={require('../../image/login_pas.png')}>
                        </LoginInputText>
                        <LoginInputText 
                            placeholder="请输入您的手机号"
                            onChange={this.onPhoneChange}
                            img={require('../../image/login_iphone.png')}>
                        </LoginInputText>
                        <View style={styles.view_vcode}>
                            <LoginInputText 
                                placeholder="请输入验证码"
                                onChange={this.onVCodeChange}
                                img={require('../../image/login_ver_cod.png')}>
                            </LoginInputText>
                            <View style={styles.view_btn_vcode}>
                                <TouchableHighlight style={styles.vCodeBtn} onPress={this.vCodeOnPress}  underlayColor='#8dcaaf' >
                                    <Text style={styles.vcodeText} >{this.state.vcodeBtnText}</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.view_login}>
                            <TouchableHighlight style={styles.btn_login} onPress={this.loginOnPress} underlayColor='#8dcfff' >
                                <Text style={styles.vcodeText} >登陆</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }


}

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps)
	return {
        
	};
}

export default connect(mapStateToProps)(Demo);
