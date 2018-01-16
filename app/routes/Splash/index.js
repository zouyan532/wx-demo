import React from 'react';
import { View, Image, Text, StyleSheet, TextInput,TouchableHighlight, AsyncStorage } from 'react-native';

import {connect} from 'dva';
import { Actions,ActionConst } from 'react-native-router-flux';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    
});

class Splash extends React.Component {
    componentWillMount(){
        timer = setTimeout(()=>{
            AsyncStorage.getItem('token')
            .then(  //使用Promise机制的方法
                (result)=> {   //使用Promise机制,如果操作成功不会有error参数
                    if (result == null) {
                        //没有指定的key
                        Actions.Demo({type:ActionConst.REPLACE})
                        return;
                    }
                    Actions.Apply({ type: ActionConst.REPLACE })
                }
            ).catch((error)=> {  //读取操作失败
                Actions.Demo({type:ActionConst.REPLACE})
            });
        },2000)
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>闪屏页</Text>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
	console.log(state, ownProps)
	return {
	};
}

export default connect(mapStateToProps)(Splash);
