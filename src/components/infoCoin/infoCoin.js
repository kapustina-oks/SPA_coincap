import {useEffect, useState} from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import CoinService from '../../services/coinService';


const InfoCoin = (props) => {
    
    const [coin, setCoin] = useState(null);

    const coinService = new CoinService();

    useEffect(() => {
        onRequest()
    }, [props.coinId])

    function onRequest() {
        const {coinId} = props;
        if (!coinId) {
            return;
        }

        //onCoinListLoading();
        coinService
            .getCoinByID(coinId)
            .then(onCoinLoaded)
           
            
    }

    const onCoinLoaded = (coin) => {
        setCoin(coin);
    }

   
    const content = coin === null ? null : <RenderItem coin={coin}/>;
    
    return (
        <Card style={{ width: '18rem' }}>
           {content}
        </Card>
    )

}

const RenderItem = (props) => {
    let coin = props.coin;
    
    return (
        <>
            <Card.Header>{coin.name}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>{coin.symbol}</ListGroup.Item>
                <ListGroup.Item>Price: ${Math.floor(coin.priceUsd*100)/100}</ListGroup.Item>
                <ListGroup.Item>Change(24Hr): {Math.floor(coin.changePercent24Hr*100)/100}%</ListGroup.Item>
                <ListGroup.Item>Market Cap: ${Math.floor(coin.marketCapUsd*100)/100}</ListGroup.Item>
                <ListGroup.Item>Supply: {Math.floor(coin.supply*100)/100}</ListGroup.Item>
                <ListGroup.Item>Max supply: {Math.floor(coin.maxSupply*100)/100}</ListGroup.Item>
                <ListGroup.Item>Volume(24Hr): ${Math.floor(coin.volumeUsd24Hr*100)/100}</ListGroup.Item>
                <ListGroup.Item>VWAP(24H): ${Math.floor(coin.vwap24Hr*100)/100}</ListGroup.Item>
            </ListGroup> 
        </>
    )
}

export default InfoCoin; 