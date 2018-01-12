import * as service from '../../services/InfoService.js'
export default {
	namespace: 'ware',
	state: {
        data:"",
        refreshing:false, 
        items:[],
	},
	subscriptions: {
		
	},
	effects: {
        * search(state,{call,put,select}){
            console.log("执行到了")
            const tab =  yield select(state=>state.main.tab);
            console.log(tab);
            const res = yield call(service.queryInfo,{msg:tab});
            console.log(res);
            yield put({type:'fetchSuccess',payload:res.data})
        },

        * searchList(payload,{call,put,select}){
            console.log(payload)
            yield put({type:'refreshStart'})
            const tab =  yield select(state=>state.main.tab);
            console.log(tab);
            const res = yield call(service.queryList,{msg:tab});
            console.log(res);
            yield put({type:'fetchListSuccess',payload:res.data})
            yield put({type:'refreshFinish'})

        },

      
	},
	reducers: {
       
        fetchSuccess(state,{payload}){
            // console.log(payload)
            return {...state,data:payload}
        },
  
        fetchListSuccess(state,{payload}){
            console.log("fetchList")
            console.log(payload)
            return {...state,items:payload}
        },    
        refreshStart(state){
            return {...state,refreshing:true}
        },
        refreshFinish(state){
            return {...state,refreshing:false}
        },
        notFirst(state){
            return{...state,isFirst:false}
        },
        clear(state){
            return{...	state, 
                items:[],
                refreshing:false, 
                data:""
            }
        }


	},

};