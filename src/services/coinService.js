// Coincap api has issues with CORS passing Authorization header - needed to unlock limit, proxy needed to be run from run-proxy.sh
const host = 'http://localhost:8000'

class CoinService {
    getResourse = async (url) => {
        const token = '12e2fd18-bceb-4280-9f51-3a3650f589e6';
        
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip',
                'Authorization':  `Bearer ${token}`,
            }
        };

        let res = await fetch(url, requestOptions);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        } 

        return await res.json();
    }

    getAllCoins = async (offset=0) => {
        const res = await this.getResourse(`${host}/v2/assets?limit=10&offset=${offset}`);
        return res.data;
    }

    getCoinByID = async (id) => {
        const res = await this.getResourse(`${host}/v2/assets/${id}`);
        return res.data;
    }

}

export default CoinService;



