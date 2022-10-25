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
var apiResponse = {};
var loginInput = {};

app.post('/api/user/login',urlencodedParser,(req,res)=>{
    sql.query(`SELECT * FROM user WHERE username = ? AND password = ? AND approvalStatus = 1`,[req.body.username,req.body.password],(err,result)=>{
        if(err){
            console.log(err);
        }

        loginInput = {
            iduser : result[0].iduser,
        }

        const token = generateUserToken(loginInput);

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

function generateUserToken(input){
    return jwt.sign(input,process.env.TOKEN_SECRET);
}


export default app;