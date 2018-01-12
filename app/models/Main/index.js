import { routerRedux, Route, Switch } from 'dva/router';
import router from '../../routes';

const { ConnectedRouter } = routerRedux;
export default {
	namespace: 'main',
	state: {
		tab:"laravel",
		selectIndex:1,
	},
	subscriptions: {
		
	},
	effects: {
        * showTag({payload},{put}){
            console.log(payload)
	    yield put({type:'changeTab',tab: payload})
	    
	},
	* jump({payload},{put,select}){
		const selectIndex = yield select(state=>state.main.selectIndex)
		if(selectIndex===1){
			yield put(routerRedux.push('/Info'))
		}else{
			yield put(routerRedux.push('/Warehouse'))
		}
	    
	}
	},
	reducers: {
	changeTab(state,{tab}){
            console.log("asd"+tab.tab)
            return {...state, tab:tab.tab }
	},
	changeBtnColor1(state,){
	    return {...state,selectIndex:1}			
	},
	changeBtnColor2(state){
	    return {...state,selectIndex:2}	
		
	},
	
	},

};