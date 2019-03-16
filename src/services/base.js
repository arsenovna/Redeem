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
            await fetch(`${url}${data.perk.id}`, {
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
        }      
        catch (error) {
            return error;
        }
    }
}