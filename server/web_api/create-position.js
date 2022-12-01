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
               var side = req.body.side;
               var symbol = req.body.symbol;
               var order_type = "Market";
               var qty = req.body.qty;
               var time_in_force = "GoodTillCancel";
               var reduce_only = false;
               var close_on_trigger = false;
               if(req.body.position_idx == undefined){
                axios.get(base_url+public_time)
                .then((result)=>{
                     params = {
                         "timestamp": (result.data.time_now*1000).toString().substring(0,13),
                         "symbol" : symbol,
                         "api_key" : apiKey,
                         "side" : side,
                         "order_type" : order_type,
                         "qty" : qty,
                         "time_in_force"  : time_in_force,
                         "reduce_only" : reduce_only,
                         "close_on_trigger" : close_on_trigger
                     };
                     sign = getSignature(params,apiSecretKey);
                     axios({
                         method: 'post',
                         url: base_url+place_order,
                         data: {
                             "api_key":apiKey,
                             "side" :side,
                             "symbol" : symbol,
                             "order_type" : order_type,
                             "qty" : qty,
                             "time_in_force" : time_in_force,
                             "reduce_only" : reduce_only,
                             "close_on_trigger":close_on_trigger,
                             "timestamp" : (result.data.time_now*1000).toString().substring(0,13),
                             "sign" : sign
                         },
                         headers: {
                             'content-type': 'application/json',
                          }
                     }).then((result)=>{
                         res.send(result.data);
                     }).catch((err)=>{
                         console.log(err);
                         res.send(err);
                     })
                    })
                }
                else{
                    axios.get(base_url+public_time)
                    .then((result)=>{
                         params = {
                             "timestamp": (result.data.time_now*1000).toString().substring(0,13),
                             "symbol" : symbol,
                             "api_key" : apiKey,
                             "side" : side,
                             "order_type" : order_type,
                             "qty" : qty,
                             "time_in_force"  : time_in_force,
                             "reduce_only" : reduce_only,
                             "close_on_trigger" : close_on_trigger,
                             "position_idx" : req.body.position_idx
                         };
                         sign = getSignature(params,apiSecretKey);
                         axios({
                             method: 'post',
                             url: base_url+place_order,
                             data: {
                                 "api_key":apiKey,
                                 "side" :side,
                                 "symbol" : symbol,
                                 "order_type" : order_type,
                                 "qty" : qty,
                                 "time_in_force" : time_in_force,
                                 "reduce_only" : reduce_only,
                                 "close_on_trigger":close_on_trigger,
                                 "timestamp" : (result.data.time_now*1000).toString().substring(0,13),
                                 "position_idx" : req.body.position_idx,
                                 "sign" : sign
                             },
                             headers: {
                                 'content-type': 'application/json',
                              }
                         }).then((result)=>{
                             res.send(result.data);
                         }).catch((err)=>{
                             res.send(err);
                         })
                        })
                }

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