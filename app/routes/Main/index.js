import React from 'react';
import { View, Image, Text, StyleSheet, TextInput,TouchableHighlight } from 'react-native';

import {connect} from 'dva';
import ClearEditText from '../../components/ClearEditText';
import TextBtn from '../../components/TextBtn';
import { Actions } from 'react-native-router-flux';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },


    searchBg:{
        flexDirection :'row'
    },
    input:{
        flex:1,
        height: 40, 
        paddingLeft:20,
        justifyContent: 'center',
        alignItems:'center',
        textAlignVertical:'center',
    },
    inputBg:{
        marginLeft:20,
        flex:10,
        height:30,
        backgroundColor:'gray',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        flexDirection:'row',
    },
    searchBtnBg:{
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:30,
        marginLeft:20,
        alignItems:'center',  
        justifyContent: 'center',  
        marginRight:20,
        flex:3,
        backgroundColor:'blue',
    },
    noContentSearchBtnBg:{
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:30,
        marginLeft:20,
        alignItems:'center',  
        justifyContent: 'center',  
        marginRight:20,
        flex:3,
        backgroundColor:'gray',
    },
    seachText:{
        alignItems:'center',
        color:'white',
        textAlign:'center', 
        fontSize:14,
    },
    settingBtn:{
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:30,
        marginLeft:20,
        alignItems:'center', 
        marginTop:20,
        justifyContent: 'center',  
        marginRight:20,
        width:100,
        backgroundColor:'gray',
    }
    
});



class Main extends React.Component {

    onChange =(params)=> {
        console.log("input changed");
        this.props.dispatch({
          type:'main/showTag',
          payload:{
                    tab:params
                }
        })
        if(this.props.tab===""){
            
        }
      }
      onPersonal=(params)=>{
          this.props.dispatch({
              type:"main/changeBtnColor1"
          })
      }
      searchOnPress=(params)=>{
          if(this.props.selectIndex===1){
              Actions.Info();
          }else{
              Actions.Ware();
          }
      }

      onWare=(params)=>{
          this.props.dispatch({
              type:"main/changeBtnColor2"
          })
      }
      
      settingOnPress=(params)=>{
          Actions.Setting();
      }

      testOnPress=(params)=>{
          Actions.Demo();
      }
      
    render() {
        return (
            
            <View style={styles.container} >
                
                    {/* <TouchableHighlight style={this.props.selectIndex===1?styles.selectedBtn:styles.unSelectBtn}>
                        <Text  style={styles.btnText} onPress={this.onWare} >仓库</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.props.selectIndex===2?styles.selectedBtn:styles.unSelectBtn}>
                        <Text  style={styles.btnText} onPress={this.onPersonal}>个人</Text>
                    </TouchableHighlight> */}
                    {/* <TextBtn selectIndex={this.props.selectIndex} onPress={this.onPersonal} text="个人"/> */}
                <TextBtn selectIndex={this.props.selectIndex} onPressWare={this.onWare} onPressInfo={this.onPersonal}/>
               
                <View style={styles.searchBg} >
                    {/* <View style={styles.inputBg}> */}
                        {/* <TextInput
                            style={styles.input}
                            onChangeText={this.onChange}
                            value={this.props.tab}/> */}
                        {/* <Text >删除</Text> */}
                    {/* </View> */}
                    <ClearEditText
                        tab={this.props.tab}
                        onChange={this.onChange}
                    />
                    <TouchableHighlight style={this.props.tab===""?styles.noContentSearchBtnBg:styles.searchBtnBg} >
                        <Text style={styles.seachText} onPress={this.searchOnPress}>搜索</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight style={styles.settingBtn} >
                        <Text style={styles.seachText} onPress={this.settingOnPress}>设置</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.settingBtn} >
                        <Text style={styles.seachText} onPress={this.testOnPress}>设置</Text>
                    </TouchableHighlight>
            </View>
        );
    }


}

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps)
	return {
        //tab:state.main.tab,//前面的tab可以用this.props.tab调用，后面的tab是全部的
                      //state里的Models下的命名空间为Main下的state中的变量tab
                      //当namespace改变是会引起前面的tab变化，并且重新渲染
            tab:state.main.tab,
            selectIndex:state.main.selectIndex,
	};
}

export default connect(mapStateToProps)(Main);
