import express from 'express';
import cors from 'cors';
import sql from "../model/db.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

const app = express();  
app.use(cors());
dotenv.config();

app.get('/api/user/user-info',(req,res)=>{
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
                sql.query(`SELECT username,email,name
                FROM crypto_web.user 
                LEFT JOIN crypto_web.api_info 
                ON user.iduser = api_info.iduser_api WHERE username = ? AND password = ? GROUP BY iduser`,[jwt.username,jwt.password],(err,result)=>{
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