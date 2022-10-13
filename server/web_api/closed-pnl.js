import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
import axios from 'axios'
import crypto from 'crypto'
import bodyParser from 'body-parser';
import {base_url as base_url,pnl_path as pnl_path,public_time as public_time} from '../config/webapi-configuration.js'

const app = express();  
app.use(cors());
dotenv.config();
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

var router = express.Router();

router.post('/',urlencodedParser,(req,res)=>{
    if(req.headers.authorization == null){
        res.send("Token required for authentication !");
    }
    else{
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,process.env.TOKEN_SECRET,(err,jwt)=>{
            if(err){
                return res.send(err.message);
            }
            else{
               var url = new URL(base_url + pnl_path);
               var apiKey = jwt.apiKey;
               var apiSecretKey = jwt.apiSecretKey;
               var params = "";
               var sign  = "";
               var symbol = req.body.pair;
               var start_time = new Date(req.body.from).getTime()/1000;
               var end_time = new Date(req.body.to).getTime()/1000;
               axios.get(base_url+public_time)
               .then((result)=>{
                    params = {
                        "timestamp": (result.data.time_now*1000).toString().substring(0,13),
                        "symbol" : symbol,
                        "api_key" : apiKey,
                        "start_time": start_time,
                        "end_time":end_time
                    };
                    url.searchParams.append('api_key', apiKey);
                    url.searchParams.append('symbol',symbol);
                    url.searchParams.append('start_time',start_time);
                    url.searchParams.append('end_time',end_time);
                    url.searchParams.append('timestamp',params.timestamp);
                    sign = getSignature(params,apiSecretKey);
                    url.searchParams.append('sign',sign);
                    axios.get(url.href)
                    .then((result)=> {
                        console.log(result.data);
                        res.send(result.data);
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
               )

            }
        
        });
    }

});

app.use('/api/bybit/closed-pnl',router);

function getSignature(parameters, secret) {
	var orderedParams = "";

  //Sort param alphabetically
	Object.keys(parameters).sort().forEach(function(key) {
	  orderedParams += key + "=" + parameters[key] + "&";
	});

  //remove '&' symbol on last index of string
	orderedParams = orderedParams.substring(0, orderedParams.length - 1);

	return crypto.createHmac('sha256', secret).update(orderedParams).digest('hex');
}

export default app;