import {coin_tickers as coin_tickers} from '../config/webapi-configuration.js';
import express from 'express';
import axios from 'axios'
import bodyParser from 'body-parser';
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

const app = express();  
var router = express.Router();

router.get('/',urlencodedParser,(req,res)=>{
    axios.get(coin_tickers).then(
        (result)=>{
            res.send(JSON.stringify(result.data.result));

        }
    )

});


app.use('/api/bybit/coin-tickers',router);

export default app;