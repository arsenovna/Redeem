export default class Base {

    // constructor(){}

    getCurrentSession = () => window.localStorage.getItem('authentication_token');
    
    getJson = async (url) => {
        try {
            let request = await fetch(url, 
                {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token token=${this.getCurrentSession()}`,
                        'Content-type': 'application/json'
                    }
                });
            let response = await request.json();
            return response;
        } 
        catch (error) {
            return error;
        }
    }

    putJson = async (url, data) => { 
        try {
            // `${url}${data.perk.id}`
            let response = await fetch(url, {
                method: "PUT",
                headers: {
                  'Authorization': `Token token=${this.getCurrentSession()}`,
                  'Accept': 'application/json, text/javascript',
                  'Content-type': 'application/json'
                },
                cache: "no-cache",
                credentials: "same-origin",
                body: JSON.stringify(data)
            })
            let res = response.json();
            console.log(res)
        }      
        catch (error) {
            return error;
        }
    }

    postJson = async (url, data) => {
        console.log(url, data);
        try {
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "no-cors",
                cache: "no-cache",
                credentials: "same-origin",
                body: data
            })
            let res = await response.json();
            return res;
        }
        catch (error) {
            return error;
        }
    }

}