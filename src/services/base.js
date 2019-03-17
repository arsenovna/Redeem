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

    postJson = async (url, data) => { 
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
}