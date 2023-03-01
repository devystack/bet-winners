import axios from 'axios'

var baseURL = "http://localhost:5000"
// var baseURL = "http://46.4.60.198"

function apiCall(url, method, token, data, successCallback, errorCallback){
    axios({
        method: method,
        url: url,
        data: data,
        // headers: {},
        headers: {
            'Authorization': 'JWT ' + token
        },
        baseURL: baseURL
    })
    .then(successCallback)
    .catch(errorCallback)
}
export default apiCall