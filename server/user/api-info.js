import express from 'express';
import cors from 'cors';
import sql from "../model/db.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

const app = express();  
app.use(cors());
dotenv.config();

app.get('/api/user/api-info',(req,res)=>{
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
                sql.query(`SELECT * FROM api_info WHERE apiKey = ? AND apiSecretKey = ?`,[jwt.apiKey,jwt.apiSecretKey],(err,result)=>{
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