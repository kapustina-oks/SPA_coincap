
import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Card} from 'react-bootstrap';
import Skeleton from '../skeleton/skeleton';
import InfoCoin from '../infoCoin/infoCoin';


//import CoinService from './services/coinService';

function TableCoin() {

    const [coins, setCoins] = useState([]);
    const [newCoinsLoading, setNewCoins] = useState(10);
    const [coinSelected, setSelectedCoin] = useState(null);
   

   

    useEffect(() => {
        let requestOptions = {

            method: 'GET',
            redirect: 'follow',
            header: new Headers({
                'Authorization': 'Bearer ' + '12e2fd18-bceb-4280-9f51-3a3650f589e6',
            }),
            
        };
          
          fetch("https://api.coincap.io/v2/assets", requestOptions)
            .then(response => response.json())
            .then(res => {
                setCoins(res.data);
                
            })
            .catch(error => console.log('error', error));

        
    }, [])

    function newCoinsList (i) {
        setNewCoins(newCoinsLoading + i)
    }

    function onCoinSelected(id) {
        setSelectedCoin(id)
    }

    const renderItem = coins.map(coin => {
        if (coin.rank <= newCoinsLoading) {
            return (
                <tr onClick={()=>onCoinSelected(coin.id)}>
                    <td>{coin.rank}</td>
                    <td>{coin.name} {coin.symbol}</td>
                    <td>{Math.floor(coin.priceUsd*100)/100}</td>
                    <th>{Math.floor(coin.changePercent24Hr*100)/100}</th>
                    <th>{Math.floor(coin.vwap24Hr*100)/100}</th>
                    <th><Button variant="outline-dark" >+</Button></th>
                </tr>
            )
        }
       

    })

    const renderMaxCoin = coins.map(coin => {
        if (coin.rank <= 3) {
            return (
                <Col>
                    <Card style={{ width: '18rem' } }>
                        <Card.Body>
                            <Card.Title>{coin.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{coin.symbol}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">{Math.floor(coin.priceUsd*100)/100}{'$'}</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </Col>
            )

        }
        
    })

    

    return (
        
            <Container className="mt-5">
                <Row>
                    {renderMaxCoin}
                </Row>
                <Row>
                    <Col sm={8}>
                        <Table striped bordered hover className="mt-5 text-center">
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
                                {renderItem}
                            </tbody>
                        </Table>

                        {newCoinsLoading < 100 ? <Button variant="outline-dark" className="mb-5" onClick={()=>newCoinsList(10)}>Load more</Button> : null}
                        
                    </Col>
                    <Col className="mt-5">
                        {coinSelected === null ? <Skeleton/> : <InfoCoin coinID={coinSelected}/>}
                    </Col>
                </Row>
            </Container>
      
    )
}

export default TableCoin;