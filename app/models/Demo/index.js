import { routerRedux, Route, Switch } from 'dva/router';
import router from '../../routes';
import *as service from '../../services/CaptainService.js'
import React, {
	     AsyncStorage
	 }from 'react-native';
import { Actions } from 'react-native-router-flux';
const { ConnectedRouter } = routerRedux;
export default {
	namespace: 'demo',
	state: {
	
	},
	subscriptions: {
		
	},
	effects: {
		* getToken({shipNumber,password,phone,vCode},{put,call}){
			
			// console.log(info)
			let param = {
				body:{
					phoneNumber:phone,
					shipIdentity:shipNumber,
					shipPassword:password,
					smsCode:vCode
				}
			}
			console.log(param)
			const res = yield call(service.login,param)
			console.log(res)	
			yield put({
				type:'saveToken',
				payload:res.data.token
			})
			Actions.Apply()
		},
	
	},
	reducers: {
		saveToken(state,{payload}){
			AsyncStorage.setItem("token",payload).then(
				()=>{   //成功的操作
					console.log("token保存成功!");
				},
			);
			AsyncStorage.getItem('token')
				.then(  //使用Promise机制的方法
					(result)=> {   //使用Promise机制,如果操作成功不会有error参数
						if (result == null) {
							//没有指定的key
							return;
						}
						console.log("token:" + result);
					}
				).catch((error)=> {  //读取操作失败
					console.log('error:' + error.message);
				});
			return {...state}
		}
    }

};