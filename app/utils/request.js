

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url,params,method) {
  if(method==="Post"){
    console.log(params)
    return post(url,params)
  }else{
    return get(url)
  }
}

function get(url) {
  return fetch(url)
  .then(checkStatus)
  .then(parseJSON)
  .then(data => ({ data }))
  .catch(err => ({ err }));
}

function post(url,params) {
    console.log(params)
    return fetch(url,{
        method:'Post',
        headers:{
          'token':params.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(params.body)
      })
    .then(function checkStatus(response) {
      console.log(response)
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
    
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then(function parseJSON(response) {
      return response.json();
    })
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
