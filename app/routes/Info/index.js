import React from 'react';
import { View, Image, Text, StyleSheet, TextInput,TouchableHighlight,FlatList } from 'react-native';

import {connect} from 'dva';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
});

class Info extends React.Component {

    componentWillMount(){//使用的到
        console.log("Componnetwill Mount")
        this.props.dispatch({
            type:'info/search',
            payload:{
                isRefresh:true,
            }
        })
    }
    //   _renderItem=({item})=>{
    //     <View>
    //     <Text>{item.name}</Text>
    //     <Text>{item.id}</Text>
    // </View>
    // }
    _onRefresh=()=>{
        if(this.props.refreshing){
            return;
        }
        this.props.dispatch({
            type:'info/search',
            payload:{
                isRefresh:true,
            }
        })
    }

    _renderItem = ({item}) => (
        <View style={{backgroundColor: 'white'}}>
          <Text style={{fontSize: 20, marginTop: 20, marginLeft: 10}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 15, color: 'grey', marginTop: 5, marginLeft: 10}} >
            {item.public_repos}
          </Text>
          <Text style={{fontSize: 15, color: 'red', marginTop: 15, marginLeft: 10, marginBottom: 20}} >
            {item.id}
          </Text>
        </View>
      );

      _onEndReached=()=>{
          
          if(this.props.refreshing){
            return;
          }
          console.log("滑动到了底部")
        // this.props.dispatch({
        //     type:'info/addPage'
        // })
        this.props.dispatch({
            type:'info/search',
            payload:{
                isRefresh:false,
            }
        })
      }
    
      componentWillUnmount(){
          this.props.dispatch({
              type:'info/clear',

          })
      }

    _keyExtractor = (item, index) => item.id;
    render() {
        return (
            <View style={styles.container} >
               <Text>Info</Text>
                <FlatList
                    data={this.props.items}
                    ItemSeparatorComponent={() => <View style={{
                        height: 1,
                        backgroundColor: '#D6D6D6'
                      }}/>}
                    onRefresh={this._onRefresh}
                    refreshing={this.props.refreshing}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={1}
                />
                {/* {this.props.isEnd?<Text>没有更多数据了</Text>:null} */}
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
            items:state.info.items,
            refreshing:state.info.refreshing,
            isEnd:state.info.isEnd,
	};
}

export default connect(mapStateToProps)(Info);
