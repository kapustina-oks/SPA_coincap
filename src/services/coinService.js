
class CoinService {
    

    getResourse = async (url) => {
        let requestOptions = {

            method: 'GET',
            redirect: 'follow',
            header: new Headers({
                'Authorization': 'Bearer ' + '12e2fd18-bceb-4280-9f51-3a3650f589e6',
            }),
            
        };

        let res = await fetch(url, requestOptions);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        } 

        return await res.json();
    }

    getAllCoins = async (offset=0) => {
        const res = await this.getResourse(`https://api.coincap.io/v2/assets?limit=10&offset=${offset}`);
        return res.data;
        
    }

   

}




export default CoinService;



