import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import sql from "../model/db.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

const app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(cors());
dotenv.config();
var apiResponse = {};
var loginInput = {};

var router = express.Router();
router.post('',urlencodedParser,(req,res)=>{
    sql.query(`SELECT * FROM admin WHERE username = ? AND password = ?`,[req.body.username,req.body.password],(err,result)=>{
        if(err){
            console.log(err);
        }

        loginInput = {
            idadmin: result[0].idadmin,
            username:req.body.username,
            password:req.body.password
        }

        const token = generateAdminToken(loginInput);

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

function generateAdminToken(input){
    return jwt.sign(input,process.env.TOKEN_SECRET);
}


app.use('/api/admin/login',router);

export default app;