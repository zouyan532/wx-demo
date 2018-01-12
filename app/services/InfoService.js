import request from '../utils/request';
export  async function query(params) {//record-list接口
  console.log(params)
  let url = `https://api.github.com/search/repositories?q=${params.msg}&sort=stars&order=desc&per_page=${params.size}&page=${params.page}&client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`
  console.log(url)
  return await request(url)
}

export  async function queryInfo(params) {//user信息接口
  let url = `https://api.github.com/users/${params.msg}?client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`
  return await request(url)
}

export  async function queryList(params) {//user-record-list接口
  let url = `https://api.github.com/users/${params.msg}/repos?per_page=250&client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`
  return await request(url)
}