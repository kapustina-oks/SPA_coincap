import CoinService from '../../services/coinService';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button} from 'react-bootstrap';

import Header from '../header/header';
import InfoCoin from '../infoCoin/infoCoin';
import FooterPage from '../footer/footer';

import Skeleton from '../skeleton/skeleton';
import ErrorMsg from '../error/errorMsg';
import Spinner from '../spinner/spinner';


const TableCoin = (props) => {

    const [coins, setCoins] = useState([]);
    const [newCoinsLoading, setNewCoinsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [coinSelected, setSelectedCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [endedCoins, setCoinsEnded] = useState(false);

    const coinService = new CoinService();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = (offset) => {
        onCoinListLoading();

        coinService
            .getAllCoins(offset)
            .then(onCoinsLoaded)
            .catch(onCoinsError)
    }

    const onCoinListLoading = () => {
        setNewCoinsLoading(true);
    }

    const onCoinsLoaded = (newCoinsList) => {
        let ended = false;
        if (newCoinsList.length < 10) {
            ended = true;
        }

        setCoins(coins => [...coins, ...newCoinsList]);
        setOffset(offset => offset + 10)
        setLoading(loading => false)
        setNewCoinsLoading(newCoinsLoading => false)
        setCoinsEnded(endedCoins => ended);
        
    }

    const onCoinsError = () => {
        setError(true);
        setLoading(loading => false);

    }

    const onCoinSelected =(id)=> {
        setSelectedCoin(id)
    }

    function renderItem(arr) {
        const items = arr.map((coin,i) => {
                return (
                    <tr key={coin.id} onClick={()=>onCoinSelected(coin.id)}>
                        <td>{coin.rank}</td>
                        <td>{coin.name} {coin.symbol}</td>
                        <td>{Math.floor(coin.priceUsd*100)/100}</td>
                        <th>{Math.floor(coin.changePercent24Hr*100)/100}</th>
                        <th>{Math.floor(coin.vwap24Hr*100)/100}</th>
                        <th><Button variant="outline-dark" >+</Button></th>
                    </tr>
                )
        })

        return (
           <>
            <Table striped bordered hover className="mt-5 text-center" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price($)</th>
                        <th>Change(24H)</th>
                        <th>Vol(24H)</th>
                        <th>контрол</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>
            <Button 
                variant="outline-dark" 
                className="mb-5" 
                disabled={newCoinsLoading}
                style={{'display': endedCoins ? 'none' : 'block'}}
                onClick={()=>onRequest(offset)}> 
                Load more</Button>
           </>
            
        );

    }

    const maxCoin = coins.filter(coin => coin.rank <= 3);
        
    const table = renderItem(coins);
    const errorMsg = error ? <ErrorMsg/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? table : null;

    return (
        
            <>
                <Container className="mt-5">
                    <Row>
                        <Header top3 = {maxCoin}/>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            {spinner}
                            {errorMsg}
                            {content}
                        </Col>
                        <Col className="mt-5">
                            {coinSelected === null ? <Skeleton/> : <InfoCoin coinID={coinSelected}/>}
                        </Col>
                    </Row>
                    
                </Container>
                <Container>
                        <FooterPage/>
                </Container>
            </>
      
    )
}




export default TableCoin;