import {coin_tickers as coin_tickers, base_url as base_url} from '../config/webapi-configuration.js';
import express from 'express';
import axios from 'axios'

const app = express();  
var router = express.Router();

router.get('/',(req,res)=>{
    axios.get(base_url+coin_tickers).then(
        (result)=>{
            res.send(JSON.stringify(result.data.result));
        }
    )

});


app.use('/api/bybit/coin-tickers',router);

export default app;