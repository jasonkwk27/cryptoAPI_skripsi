import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
import axios from 'axios'
import crypto from 'crypto'
import {base_url as base_url,walletbalance_path as walletbalance_path,url_publictime as url_publictime} from '../config/webapi-configuration.js'

const app = express();  
app.use(cors());
dotenv.config();

var router = express.Router();

router.get('/',(req,res)=>{
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
               var url = new URL(base_url + walletbalance_path);
               var apiKey = jwt.apiKey;
               var apiSecretKey = jwt.apiSecretKey;
               var params = "";
               var sign  = "";
               axios.get(url_publictime)
               .then((result)=>{
                    url.searchParams.append('api_key', apiKey);
                    params = {
                        "timestamp": (result.data.time_now*1000).toString().substring(0,13),
                        "api_key" : apiKey
                    };
                    url.searchParams.append('timestamp',params.timestamp);
                    sign = getSignature(params,apiSecretKey);
                    url.searchParams.append('sign',sign);
                    axios.get(url.href)
                    .then((result)=> {
                        res.send(JSON.stringify(result.data.result));
                        
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

app.use('/api/bybit/wallet-balance',router);

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