

class CoinService {
    
    getResources = () => {

        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header: new Headers({
                'Authorization': 'Bearer ' + '12e2fd18-bceb-4280-9f51-3a3650f589e6',
            }),
        }
            
        
          
          fetch("https://api.coincap.io/v2/assets", requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

        
    }
    
}


export default CoinService;



