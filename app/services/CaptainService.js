// import NetUtils from '../utils/NetUitl'
// export async function login(params) {
//     console.log(log)    
//     return await NetUtils.post(params.url,params.body,params.header)
// }
import request from '../utils/request'
import React, {
    AsyncStorage
}from 'react-native';
const baseUrl = 'http://192.168.16.120:8080'
export async function login(params) {
    console.log(params)
    let url = baseUrl+'/api/v1/authenticate?loginRole=CAPTAIN'
    return await request(url,params,"Post")
}

export async function getLoadTypeCategories() {
    let url = baseUrl+'/api/v1/loadTypeCategories'
    let token = await AsyncStorage.getItem('token')
    let params = {
        token: token
    }
    console.log(params)
    return await request(url,params,'Get')
}

export async function getCurrentUser() {
    let url = baseUrl+'/api/v1/users/me'
    let token = await AsyncStorage.getItem('token')
    let params = {
        token: token
    }
    console.log(params)
    return await request(url,params,'Get')
}
