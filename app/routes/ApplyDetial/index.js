import React from 'react';
import { View, Image, Text, StyleSheet, TextInput,TouchableHighlight, AsyncStorage } from 'react-native';

import {connect} from 'dva';
import { Actions,ActionConst } from 'react-native-router-flux';
import DefaultNavBar from '../../components/DefaultNavBar';
// import TabNavigator from 'react-native-tab-navigator';  
// import * as Contract from '../utils/Contract.js';1
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    blueContainer:{
        flex:1,
        backgroundColor:'#f0f9ff',
        flexDirection:'column',
        alignItems:'center'
    },
    img:{
        width:152,
        height:122,
        marginTop:50,
    },
    view_commit:{
        width:'90%',
        marginTop:20,
        height:45,
        marginBottom:40,
        justifyContent: 'center',  
        alignSelf:'center'
    },
    btn_commit:{
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#007eff',
        marginTop:35,
        height:45,
        justifyContent: 'center',  
    },
    text_commit:{
        fontSize:15,
        alignItems:'center',
        color:'white',
        textAlign:'center', 
        alignSelf:'center',
    },
    textContent:{
        fontSize:17,
        color:'#323232',
        textAlign:'center'
    }

});

class ApplyDetial extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentWillMount(){
        console.log(this.props.orderId)
        this.props.dispatch({
            type:"ApplyDetial/getOrderbyId",
            payload:this.props.orderId
            // payload:6
        })
    }

    onBack=()=>{

    }

    componentWillReceiveProps(nextProps) {
       
    }

    render() {
        return (
            <View style={styles.container} >
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps)
	return {
        order:state.ApplyDetial.order,
        title:state.ApplyDetial.title,
        img:state.ApplyDetial.img,
        textContent:state.ApplyDetial.textContent,
        btnText:state.ApplyDetial.btnText,
	};
}

export default connect(mapStateToProps)(ApplyDetial);