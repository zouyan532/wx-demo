// import NetUtils from '../utils/NetUitl'
// export async function login(params) {
//     console.log(log)    
//     return await NetUtils.post(params.url,params.body,params.header)
// }
import request from '../utils/request'
export async function login(params) {
    console.log(params)
    let url = 'http://192.168.16.120:8080/api/v1/authenticate?loginRole=CAPTAIN'
    return await request(url,params,"Post")
}