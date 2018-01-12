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
    headContainer:{
        flexDirection:'row',        
    },
    
});



class WareHouse extends React.Component {
 
    componentWillMount(){//使用的到
        console.log("Componnetwill Mount")
        this.props.dispatch({
            type:'ware/search',
            // payload:{
            //     isRefresh:true,
            // }
        })
        this.props.dispatch({
            type:'ware/searchList'
        })
    }

    _onRefresh=()=>{
        if(this.props.refreshing){
            return;
        }
        this.props.dispatch({
            type:'ware/searchList',
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

    _keyExtractor = (item, index) => index;

    _header = () => {
        var imageAddress = this.props.data.avatar_url
        return <View style={styles.headContainer}>
                <Image source={{uri:imageAddress}}  style={{width:100,height:100}}/>  
                <Text>{this.props.data.login}</Text>
        </View>;
    }

    _footer = () => {
        return <Text >没有跟多啦</Text>;
           // return <View>   {
        //     this.props.isEnd ? (
        //         <Text >没有跟多啦</Text>) : (null)
        //   } </View>;
    }


    render() {
        console.log(this.props.items)
        return (
            <View style={styles.container} >
              
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
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
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
                      items:state.ware.items,
                      refreshing:state.ware.refreshing,
                      isEnd:state.info.isEnd,
                      data:state.ware.data,
	};
}

export default connect(mapStateToProps)(WareHouse);
