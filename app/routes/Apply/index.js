import React from 'react';
import { View, Image, Text, StyleSheet, TextInput,TouchableHighlight, ScrollView } from 'react-native';

import {connect} from 'dva';
import { Actions } from 'react-native-router-flux';
import DefaultNavBar from '../../components/DefaultNavBar.js'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    blueContainer:{
        flex:1,
        backgroundColor:'#f0f9ff',
        flexDirection:'column',
    },
    whiteContainer:{
        flexDirection:'column',
        flex:1,
        marginTop:3,
        marginLeft:13,
        marginRight:13,
        alignItems:'center',
        backgroundColor:'white'

    },
    view_top_img:{
        marginTop:28,
        marginBottom:17,
    },
    top_img:{
        width:116,
        height:116,
        marginTop:28,
        marginBottom:17,

    },
    btn_blue_border:{
        width:'90%',
        marginLeft:20,
        marginRight:20,
        borderColor:'#8dc5ff',
        borderWidth:1,
        height:44,
        marginBottom:12,
    },
    view_blue_border:{
        alignItems:'center',
        flexDirection:'row',
        height:44,
    },
    text_key:{
        color:'#323232',
        textAlignVertical :'center',
        marginLeft:12,
        fontSize:17,
    },
    view_right:{
        position:'absolute',
        right:12,
        flexDirection:'row'
    },
    text_value:{
        color:'#007eff',
        fontSize:14,
        textAlignVertical:'center',
    },
    img_select:{
        width:15,
        height:10,
        alignSelf:'center',
        marginLeft:10,
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
    }
});

class Apply extends React.Component {
    onBack=()=>{
        Actions.pop()
    }
    render() {
        return (
            <View style={styles.container} >
            {/* <Text>Apply</Text> */}
                <DefaultNavBar
                    title="过闸申请"
                    onBack={this.onBack()}
                    leftIcon={require('../../image/apply_top_per_img.png')}
                />
                <View style={styles.blueContainer}>
                    <ScrollView>
                        <View style={styles.whiteContainer}>
                            <Image style={styles.top_img} source={require('../../image/apply_top_ill_img.png')}/>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>进出</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>出闸</Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>船号</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>test</Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>载货种类</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}></Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>货物名称</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}></Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>船主</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>小城</Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>载重</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>100 t</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>尺寸</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>100 m</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.view_commit}>
                            <TouchableHighlight style={styles.btn_commit} onPress={this.loginOnPress} underlayColor='#8dcfff' >
                                <Text style={styles.text_commit} >登陆</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }


}

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps)
	return {
	};
}

export default connect(mapStateToProps)(Apply);
