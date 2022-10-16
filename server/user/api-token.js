import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sql from "../model/db.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(cors());
dotenv.config();
var tokenInput = {};
var apiResponse = {};

app.post('/api/user/api-token',urlencodedParser,(req,res)=>{
    sql.query(`SELECT * FROM api_info WHERE apiKey = ? AND apiSecretKey = ?`,[req.body.apiKey,req.body.apiSecretKey],(err,result)=>{
        if(err){
            console.log(err);
        }

        tokenInput = {
            apiKey:req.body.apiKey,
            apiSecretKey:req.body.apiSecretKey
        }

        const token = generateAPIToken(tokenInput);

        if(result.length == 1){
            apiResponse = {
                token : token,
                status : 1
            };
        }
        else {
            apiResponse = {
                status : 0
            };
        }
        res.send(JSON.stringify(apiResponse));
    })

});

function generateAPIToken(input){
    return jwt.sign(input,process.env.TOKEN_SECRET);
}

export default app;