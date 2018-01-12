import * as service from '../../services/InfoService.js'
export default {
	namespace: 'info',
	state: {
        page :1,
        size :10,
        items:[],
        refreshing:false, 
        isEnd:false,
	},
	subscriptions: {
		
	},
	effects: {
        * search(payload,{call,put,select}){
            console.log(payload)
            var page = yield select(state=>state.info.page);
            if(payload.payload.isRefresh){
                yield put({type:'refreshStart'})
            }else{
                const isEnd = yield select(state=>state.info.isEnd)
                if(isEnd){
                    return;
                }
                yield put({type:"addPage"})
                page = yield select(state=>state.info.page);
            }
            const tab =  yield select(state=>state.main.tab);
            console.log(tab);
            const size = yield select(state=>state.info.size);
            console.log(size);
            console.log(page);
            const res = yield call(service.query,{msg:tab,size,page});
            console.log(res);
           
            if(payload.payload.isRefresh){
            
                yield put({type:'fetchSuccess',payload:res.data.items})
                yield put({type:'refreshFinish'})
            }else{
               yield put({type:'fetchMoreSuccess',payload:res.data.items})
            }
        },
	},
	reducers: {
        addPage(state){
            return {...state,page:state.page+1}
        },

        cutPage(state){
            return {...state,page:state.page-1}
        },
        fetchSuccess(state,{payload}){
            // console.log(payload)
            return {...state,items:payload,isEnd:false,page:1}
        },
        fetchMoreSuccess(state,{payload}){
            if(payload.length<state.size){
                return{...state,items:state.items.concat(payload),isEnd:true}
            }
            return{...state,items:state.items.concat(payload)}
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
                page :1,
                size :10,
                items:[],
                refreshing:false, 
                isEnd:false,
            }
        }
	},

};