/* import {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';


function InfoCoin(coinID) {

    const [coin, setCoin] = useState([]);

    useEffect(() => {
        let requestOptions = {
            mode: 'no-cors',
            method: 'GET',
            redirect: 'follow',
            
          };
          
          fetch("https://api.coincap.io/v2/candles?exchange=poloniex&interval=h8&baseId=ethereum&quoteId=bitcoin", requestOptions)
            .then(response => response.json())
            .then(result => setCoin(result.data))
            .catch(error => console.log('error', error));

        
    }, [])

    const renderCoinInfo = (coin) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{coin.open}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            {renderCoinInfo}
        </>
    )
}

export default InfoCoin; */