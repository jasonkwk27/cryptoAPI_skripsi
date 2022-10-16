import {coin_tickers as coin_tickers, base_url as base_url} from '../config/webapi-configuration.js';
import express from 'express';
import axios from 'axios'

const app = express();  

app.get('/api/bybit/coin-tickers',(req,res)=>{
    axios.get(base_url+coin_tickers).then(
        (result)=>{
            res.send(JSON.stringify(result.data.result));
        }
    )

});

export default app;