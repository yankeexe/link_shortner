class RebrandlyApi {
    static baseUrl = 'https://api.rebrandly.com/v1'

    static get (path, params) {
        const url = RebrandlyApi.baseUrl + path;
        
        return fetch(url, {
            headers: {
                apikey: sessionStorage.getItem('apikey') || params.headers.apikey
            }
        })
        .then(response => {
            if(!response.ok) {
                return Promise.reject(new Error(response.statusText))
            }
            else{
                return response.json()
            } 
        })
    }

    static post(path, params){
        const url = RebrandlyApi.baseUrl+path;
        const apikey =  sessionStorage.getItem('apikey');
        return fetch(url, {
            method: 'post',
            headers: {
                apikey: apikey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params.body)
            })
            .then(response => {
                if(!response.ok){
                    return Promise.reject(new Error(response.statusText))
                }
                else{
                    return response.json()
                }
            })
        }

        static delete(path,params){
            const url  =  RebrandlyApi.baseUrl + path;
            const apikey = sessionStorage.getItem('apikey')
        }

    }




export default RebrandlyApi;