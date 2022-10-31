import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
import axios from 'axios'
import crypto from 'crypto'
import bodyParser from 'body-parser';
import {base_url as base_url,place_order as place_order,public_time as public_time} from '../config/webapi-configuration.js'

const app = express();  
app.use(cors());
dotenv.config();
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.post('/api/bybit/create-position',urlencodedParser,(req,res)=>{
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
               var apiKey = jwt.apiKey;
               var apiSecretKey = jwt.apiSecretKey;
               var params = "";
               var sign  = "";
               var symbol = req.body.pair;
               axios.get(base_url+public_time)
               .then((result)=>{
                    params = {
                        "timestamp": (result.data.time_now*1000).toString().substring(0,13),
                        "symbol" : symbol,
                        "api_key" : apiKey,
                    };
                    sign = getSignature(params,apiSecretKey);
                    axios({
                        method: 'post',
                        url: base_url+place_order,
                        data: data,
                        headers: {
                            'content-type': 'application/json',
                         }
                    }).then((result)=>{
                        console.log(result.data)
                    }).catch((err)=>{
                        res.send(err);
                    })
                }
               )

            }
        
        });
    }

});


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