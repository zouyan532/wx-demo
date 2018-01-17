import React from 'react';
import { View, Image, Text, StyleSheet, TextInput,TouchableHighlight, ScrollView, ToastAndroid } from 'react-native';

import {connect} from 'dva';
import { Actions } from 'react-native-router-flux';
import DefaultNavBar from '../../components/DefaultNavBar.js'
import AlertSelected from '../../components/AlertSelected.js'
import request from '../../utils/request';

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
    constructor(props){
        super(props)
        this.state={
            selectedArr:[],
            clickPosition:-1,
            clickGoodType:-1,
            request:{
                ship:{
                    id:-1
                },
                trafficDirection:'',
                loadType:{
                    id:-1
                }
            },
            trafficDirectionText:'',
            shipNumber:'',
            goodType:'',
            goodName:'',
            shipOwner:'',
            capacity:'',
            length:''
        }
    }
    onBack=()=>{
        Actions.pop()
    }

    componentDidMount(){
        this.props.dispatch({
            type:'Apply/getCurrentUser'
        })
        
        this.props.dispatch({
            type:'Apply/getLoadTypeCategories'
        })
    }

    callbackSelected=(i)=>{
        // console.log(this.state)
      switch(this.state.clickPosition){
          case 0:
            const trafficDirection=""
            const trafficDirectionText=""
            if(i===0){
                trafficDirection="IN"
                trafficDirectionText="进闸"
            }else{
                trafficDirection="OUT"
                trafficDirectionText="出闸"
            }
            this.setState({
                trafficDirectionText:trafficDirectionText,
                request:{
                    ...this.state.request,
                    trafficDirection:trafficDirection
                }
            })
          break;
          case 1:
            this.setState({
                shipNumber:this.props.user.ships[i].shipIdentity,
                shipOwner:this.props.user.ships[i].ownerName,
                capacity:this.props.user.ships[i].capacity?this.props.user.ships[i]:'0'+'t',
                length:this.props.user.ships[i].length?this.props.user.ships[i]:'0'+'m',
                request:{
                    ...this.state.request,
                    ship:{
                        id:this.props.user.ships[i].id
                    }
                }
            },()=>{
                console.log(this.state.request)
            })
          break
          case 2:
            this.setState({
                clickGoodType:i,
                goodType:this.props.loadTypeCategories[i].name,
                goodName:'选择货物',
                request:{
                    ...this.state.request,
                    loadType:{
                        id:-1
                    }
                }
            },()=>{
                console.log(this.state.clickGoodType)
            })
          break
          case 3:
            this.setState({
                goodName:this.props.loadTypeCategories[this.state.clickGoodType].loadTypes[i].name,
                request:{
                    ...this.state.request,
                    loadType:{
                        id:this.props.loadTypeCategories[this.state.clickGoodType].loadTypes[i].id
                    }
                }
            },()=>{
                console.log(this.state.request)
            })
          break
      }
    }

    _OnPressLock=()=>{
        this.setState({
            selectedArr:["进闸","出闸"],
            clickPosition:0,
        },() =>{
            console.log(this.state)
            this.dialog.show(this.state.selectedArr);
        })
    }
    
    _OnPressShipNumber=()=>{
        console.log(this.props.user)
        this.setState({
            selectedArr: Array.from(this.props.user.ships,(x)=>x.shipIdentity),
            clickPosition:1,
        },()=>{
            console.log(this.state)
            this.dialog.show(this.state.selectedArr)
        })
    }

    _OnPressGoodType=()=>{
        console.log(this.props.loadTypeCategories)
        this.setState({
            selectedArr:Array.from(this.props.loadTypeCategories,(x)=>x.name),
            clickPosition:2,
        },()=>{
            console.log(this.state.selectedArr)
            this.dialog.show(this.state.selectedArr)
        })
    }

    _OnPressGoodName=()=>{
        if(this.state.clickGoodType===-1){
            ToastAndroid.show("请先选择载货种类",ToastAndroid.SHORT)
            return
        }
        console.log(this.props.loadTypeCategories[this.state.clickGoodType])
        this.setState({
            selectedArr:Array.from(this.props.loadTypeCategories[this.state.clickGoodType].loadTypes,(x)=>x.name),
            clickPosition:3,
            goodName:'选择货物'
        },()=>{
            console.log(this.state.selectedArr)
            this.dialog.show(this.state.selectedArr)
        })
    }
    commitOnPress=()=>{
        let request = this.state.request
        if(request.trafficDirection===''){
            ToastAndroid.show('请选择进出闸',ToastAndroid.SHORT)
            return
        }
        if(request.ship.id===-1){
            ToastAndroid.show('请选择船舶号',ToastAndroid.SHORT)
            return
        }
        if(request.loadType.id===-1){
            ToastAndroid.show('请选择货物',ToastAndroid.SHORT)
            return
        }
        this.props.dispatch({
            type:'Apply/apply',
            payload:this.state.request
        })
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
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border} onPress={this._OnPressLock}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>进出</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>{this.state.trafficDirectionText}</Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border} onPress={this._OnPressShipNumber}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>船号</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>{this.state.shipNumber}</Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border} onPress={this._OnPressGoodType}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>载货种类</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>{this.state.goodType}</Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border} onPress={this._OnPressGoodName}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>货物名称</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>{this.state.goodName}</Text>
                                        <Image style={styles.img_select} source={require('../../image/apply_drop_down.png')}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>船主</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>{this.state.shipOwner}</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>载重</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>{this.state.capacity}</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={styles.btn_blue_border}>
                                <View style={styles.view_blue_border}>
                                    <Text style={styles.text_key}>尺寸</Text>
                                    <View style={styles.view_right}>
                                        <Text style={styles.text_value}>{this.state.length}</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.view_commit}>
                            <TouchableHighlight style={styles.btn_commit} onPress={this.commitOnPress} underlayColor='#8dcfff' >
                                <Text style={styles.text_commit} >确定</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
                <AlertSelected 
                    callback={this.callbackSelected}
                    ref={(dialog)=>{
                            this.dialog = dialog;
                    }} /> 
            </View>
        );
    }


}

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps)
	return {
        user:state.Apply.user,
        loadTypeCategories:state.Apply.loadTypeCategories
	};
}

export default connect(mapStateToProps)(Apply);
