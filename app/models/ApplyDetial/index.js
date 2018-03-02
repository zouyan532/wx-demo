import { routerRedux, Route, Switch } from 'dva/router';
import router from '../../routes';
import *as service from '../../services/CaptainService.js'
import React, {
	     AsyncStorage
	 }from 'react-native';
import { Actions } from 'react-native-router-flux';
const { ConnectedRouter } = routerRedux;
export default {
	namespace: 'ApplyDetial',
	state: {
        order:'',
        title:'',
        img:require('../../image/ship_aud.png'),
        textContent:'',
        btnText:'确定'
	},
	subscriptions: {
	},
	effects: {
	},
	reducers: {
        }
    }

};