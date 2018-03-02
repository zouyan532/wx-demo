import React from 'react';
import {ActivityIndicator,LayoutAnimation, Modal, View, Image, Text, StyleSheet, TextInput,TouchableHighlight } from 'react-native';

import {connect} from 'dva';
import ClearEditText from '../../components/ClearEditText';
import TextBtn from '../../components/TextBtn';
import { Actions } from 'react-native-router-flux';
// import TabNavigator from 'react-native-tab-navigator';  
import Swiper from 'react-native-swiper';
const styles = StyleSheet.create({
    container:{  
        flex:1,  
        backgroundColor: '#ECECF0',  
      },  
      // modal的样式  
      modalStyle: {  
        // backgroundColor:'#ccc',  
        alignItems: 'center',  
        justifyContent:'center',  
        flex:1,  
      },  
      // modal上子View的样式  
      subView:{  
        marginLeft:60,  
        marginRight:60,  
        backgroundColor:'#fff',  
        alignSelf: 'stretch',  
        justifyContent:'center',  
        borderRadius: 10,  
        borderWidth: 0.5,  
        borderColor:'#ccc',  
      },  
      // 标题  
      titleText:{  
        marginTop:10,  
        marginBottom:5,  
        fontSize:16,  
        fontWeight:'bold',  
        textAlign:'center',  
      },  
      // 内容  
      contentText:{  
        margin:8,  
        fontSize:14,  
        textAlign:'center',  
      },  
      // 水平的分割线  
      horizontalLine:{  
        marginTop:5,  
        height:0.5,  
        backgroundColor:'#ccc',  
      },  
      // 按钮  
      buttonView:{  
        flexDirection: 'row',  
        alignItems: 'center',  
      },  
      buttonStyle:{  
        flex:1,  
        height:44,  
        alignItems: 'center',  
        justifyContent:'center',  
      },  
      // 竖直的分割线  
      verticalLine:{  
        width:0.5,  
        height:44,  
        backgroundColor:'#ccc',  
      },  
      buttonText:{  
        fontSize:16,  
        color:'#3393F2',  
        textAlign:'center',  
      },
      Topcontainer:{
        flex:1,
        justifyContent:'center'
      },
      centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      },
      btn:{
        marginTop:10,
        width:150,
        height:35,
        backgroundColor:'#3BC1FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
      },
});


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={
            animationType: 'none',//none slide fade
            modalVisible: false,//模态场景是否可见
            transparent: true,//是否透明显示
            show:false,
            animating: true
        }
    }

    
      startShow=()=>{
        alert('开始显示了');
      }
        // 显示/隐藏 modal  
        _setModalVisible() {  
            let isShow = this.state.show;  
            this.setState({  
            show:!isShow,  
            });  
        }  
        showLoading=()=>{
          if (this.state.animating) {
            this.setState({
              animating: false
            });
          } else {
            this.setState({
              animating: true
            });
        }
      }

      startAnimation=()=>{
        LayoutAnimation.configureNext
      }
    render() {
        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
          };
          let innerContainerTransparentStyle = this.state.transparent
            ? { backgroundColor: '#fff', padding: 20 }
            : null;
        return (
            <View style={styles.Topcontainer} >
            <Text>asd</Text>
            <Modal  
           animationType='slide'  
           transparent={true}  
           visible={this.state.show}  
           onShow={() => {}}  
           onRequestClose={() => {}} >  
           <View style={styles.modalStyle}>  
             <View style={styles.subView}>  
               <Text style={styles.titleText}>  
                 提示  
               </Text>  
               <Text style={styles.contentText}>  
                 Modal显示的View 多行了超出一行了会怎么显示，就像这样显示了很多内容该怎么显示，看看效果  
               </Text>  
               <View style={styles.horizontalLine} />  
               <View style={styles.buttonView}>  
                 <TouchableHighlight underlayColor='transparent'  
                   style={styles.buttonStyle}  
                   onPress={this._setModalVisible.bind(this)}>  
                   <Text style={styles.buttonText}>  
                     取消  
                   </Text>  
                 </TouchableHighlight>  
                 <View style={styles.verticalLine} />  
                 <TouchableHighlight underlayColor='transparent'  
                   style={styles.buttonStyle}  
                   onPress={this._setModalVisible.bind(this)}>  
                   <Text style={styles.buttonText}>  
                     确定  
                   </Text>  
                 </TouchableHighlight>  
               </View>  
             </View>  
            </View>  
            </Modal>  
              {/* 小号的指示器 */}
              <ActivityIndicator
              animating={this.state.animating}
              style={[styles.centering, {height: 80}]}
              size="small" />
              {/* 大号的指示器 */}
                <ActivityIndicator
                  animating={this.state.animating}
                  style={[styles.centering, {height: 80}]}
                  size="large" />
            <Text style={{ fontSize: 30,color:'red' }}  onPress={this._setModalVisible.bind(this, true) }>预定火车票</Text>
            <Text style={{ fontSize: 30,color:'red' }}  onPress={this.showLoading }>显示菊花</Text>
          </View>
        );
    }


}

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps)
	return {
    }
}

export default connect(mapStateToProps)(Main);
