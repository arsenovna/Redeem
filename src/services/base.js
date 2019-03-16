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
            let response = await fetch(`${url}${data.perk.bonus_perks[0].id}`, {
                method: "PUT",
                headers: {
                  'Authorization': `Token token=${this.getCurrentSession()}`,
                  'Accept': 'application/json, text/javascript',
                  'Content-type': 'application/json'
                },
                mode: "no-cors",
                cache: "no-cache",
                credentials: "same-origin",
                body: JSON.stringify(data)
            })
            // return await response.json();
            let res = await response.json();
            console.log(res);
        }      
        catch (error) {
            return error;
        }
    }
}