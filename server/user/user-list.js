import express from 'express';
import cors from 'cors'
import sql from "../model/db.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'


const app = express();  
app.use(cors());
dotenv.config();
var router = express.Router();

router.get('',(req,res)=>{
    if(req.headers.authorization == null){
        res.send("Token required for authentication !")
    }
    else{
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,process.env.TOKEN_SECRET,(err,jwt)=>{
            if(err){
                return res.send(err.message);
            }
            else{
                sql.query(`SELECT username,password,email,name,approvalStatus,COUNT(apiKey) AS connectedAPI
                FROM crypto_web.user 
                LEFT JOIN crypto_web.api_info 
                ON user.iduser = api_info.iduser_api
                GROUP BY username`,(err,result)=>{
                    if(err){
                        console.log(err);
                    }
            
                    res.send(JSON.stringify(result));
                })
            }
        });
    }

});

app.use('/api/user/user-list',router);

export default app;