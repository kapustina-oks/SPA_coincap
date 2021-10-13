import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import TableCoin from './components/tableCoin/tableCoin';

/* import CoinService from './services/coinService';

const coinService = new CoinService();
coinService.getAllCoins(); */


ReactDOM.render(
  <React.StrictMode>
    <TableCoin/>
  </React.StrictMode>,
  document.getElementById('root')
);

