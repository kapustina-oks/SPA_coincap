import { InputGroup, FormControl, Button} from 'react-bootstrap';
import { useState } from 'react';

const SearchInput = (props) => {
    /* const [search, setSearch] = useState('');

    const onSearchCoin = (e) => {
        setSearch(e.target.value)
    } */

    return (
        <InputGroup >
            <FormControl
            placeholder="Please select a coin"
            aria-describedby="basic-addon2"
            onChange={(e) => props.onSearchCoin(e.target.value)}
            onClick={props.filteredCoins}
            />
            <Button variant="outline-secondary" id="button-addon2">
            Search
            </Button>
        </InputGroup>
    )
}

export default SearchInput;