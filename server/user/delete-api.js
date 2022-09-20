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

var router = express.Router();
router.post('/',urlencodedParser,(req,res)=>{
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
                sql.query(`DELETE FROM api_info WHERE iduser_api = ? AND apiKey = ? AND apiSecretKey = ?`,[jwt.iduser,req.body.apiKey,req.body.apiSecretKey],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                
                    res.send(JSON.stringify(result));
                })
            }
        

        });
    }

    
});


app.use('/api/user/delete-api',router);

export default app;