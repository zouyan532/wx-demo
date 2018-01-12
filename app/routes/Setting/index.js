import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

import {connect} from 'dva';
import styles from './styles'
import Util from './../../utils/CommotUtils.js'


class Setting extends React.Component { 
    constructor(props){
        super(props),
        this.state={
            sex:true,
        }
    }
    OnChangeMale=()=>{
        this.setState({
            sex:true
        })
    }
    OnChangeFemale=()=>{
        this.setState({
            sex:false
        })
    }
    render() {
        return (
            <ScrollView >
            <View style={styles.topViewContainer}>
                <Text style={styles.text}>头像</Text>
                <Image source={require('../../image/personal_image_portrait.png')} style={styles.headImge}/>
                <Image source={require('../../image/rn-chevron-right.png')} style={styles.backImage} />
            </View>     
            <View style={styles.viewContainer}>
                <Text style={styles.text}>昵称</Text>
                <Text style={styles.textContent}>邹言</Text>
                <Image source={require('../../image/rn-chevron-right.png')} style={styles.backImage} />
            </View> 
            <View style={styles.viewContainer}>
                <Text style={styles.text}>性别</Text>
                <Text style={styles.textContent}>男</Text>
                <View style={styles.selectSex}>
                    <TouchableHighlight onPress={this.OnChangeMale}>
                        <Image source={this.state.sex?require('../../image/male_selected.png'):require('../../image/male.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.OnChangeFemale}>
                        <Image style={{marginLeft:10}} source={this.state.sex?require('../../image/female.png'):require('../../image/female_selected.png')}/>
                    </TouchableHighlight>
                </View>
        
            </View>     
            <View style={styles.viewContainer}>
                <Text style={styles.text}>生日</Text>
                <Text style={styles.textContent}>0818</Text>
                <Image source={require('../../image/rn-chevron-right.png')} style={styles.backImage} />
            </View>  
            <View style={styles.topViewContainer}>
                <Text style={styles.text}>收获地址</Text>
                <Text style={styles.textContent}>江苏南京</Text>
                <Image source={require('../../image/rn-chevron-right.png')} style={styles.backImage} />
            </View>
            <View style={styles.viewContainer}>
                <Text style={styles.text}>增票资质</Text>
                <Image source={require('../../image/rn-chevron-right.png')} style={styles.backImage} />
            </View>  
            <View style={styles.topViewContainer}>
                <Text style={styles.text}>手机号码</Text>
                <Text style={styles.textContent}>{Util.changePhone("18014889264")}</Text>
                <Image source={require('../../image/rn-chevron-right.png')} style={styles.backImage} />
            </View>                   
            </ScrollView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
	console.log(state, ownProps)
	return {
        //tab:state.main.tab,//前面的tab可以用this.props.tab调用，后面的tab是全部的
                      //state里的Models下的命名空间为Main下的state中的变量tab
                      //当namespace改变是会引起前面的tab变化，并且重新渲染
            
	};
}

export default connect(mapStateToProps)(Setting);