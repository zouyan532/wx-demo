import { routerRedux, Route, Switch } from 'dva/router';
import router from '../../routes';
import *as service from '../../services/CaptainService.js'
import React, {
	     AsyncStorage
	 }from 'react-native';
import { Actions } from 'react-native-router-flux';
const { ConnectedRouter } = routerRedux;
export default {
	namespace: 'Apply',
	state: {
		user:'',
		loadTypeCategories:[],
	},
	subscriptions: {
	},
	effects: {
		* getCurrentUser({},{put,call}){
			const res = yield call(service.getCurrentUser)
			console.log(res)
			yield put({
				type:'setCurrentUser',
				payload:res.data
			})
		},
		* getLoadTypeCategories({},{put,call}){
			const res = yield call(service.getLoadTypeCategories);
			console.log(res)
			yield put({
				type:'setLoadTypeCategories',
				payload:res.data
			})
		},
		*apply(params,{put,call}){
			const res = yield call(service.apply,params.payload)
			console.log(res)
		}
	},
	reducers: {
		setCurrentUser(state,{payload}){
			return {...state,user:payload}
		},
		setLoadTypeCategories(state,{payload}){
			return {...state,loadTypeCategories:payload}
		}

    }

};