import { routerRedux, Route, Switch } from 'dva/router';
import router from '../../routes';
import *as service from '../../services/CaptainService.js'
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
		},
	
	},
	reducers: {
    }

};