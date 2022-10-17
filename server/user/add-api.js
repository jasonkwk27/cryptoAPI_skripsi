import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sql from "../model/db.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

const app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(cors());
dotenv.config();

app.post('/api/user/bybit-api',urlencodedParser,(req,res)=>{
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
                sql.query(`INSERT INTO api_info (iduser_api,apiKey,apiSecretKey,description) VALUES (?,?,?,?)`,[jwt.iduser,req.body.apiKey,req.body.apiSecretKey,req.body.description],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                
                    res.send(JSON.stringify(result));
                })
            }
        

        });
    }

    
});


export default app;