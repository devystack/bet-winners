import apiCall from './apiCall'
export default () => ({
    // sport
    getSportsList(data, cb, error){apiCall('/api/v1/sport/getSportsList', 'POST', '', data, cb, error)},
    getSportBettingList(data, cb, error){apiCall('/api/v1/sport/getSportBettingList', 'POST', '', data, cb, error)},
    getLiveMatches(data, cb, error){apiCall('/api/v1/sport/getLiveMatches', 'POST', '', data, cb, error)},
    getResultData(data, cb, error){apiCall('/api/v1/sport/getResultData', 'POST', '', data, cb, error)},
    

})