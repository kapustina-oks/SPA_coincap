import TableCoin from '../tableCoin/tableCoin';
import {Col, Card} from 'react-bootstrap';

const Header = (props) => {
    const coins = props.top3;
    return (
        coins.map(coin => {
                return (
                    <Col sm={4}>
                        <Card style={{ width: '18rem' } }>
                            <Card.Body>
                                <Card.Title >{coin.name}</Card.Title>
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
        })
    )
}

export default Header;
