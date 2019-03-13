export default class Base {

    constructor(){}

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
}