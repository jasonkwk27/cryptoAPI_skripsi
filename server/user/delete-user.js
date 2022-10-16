import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import sql from "../model/db.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

const app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false });
dotenv.config();
app.use(cors());

app.post('/api/user/delete-user',urlencodedParser,(req,res)=>{
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
                sql.query('DELETE FROM api_info WHERE iduser_api = ?',[req.body.iduser],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    sql.query(`DELETE FROM user WHERE username = ?`,[req.body.username],(err,result)=>{
                        if(err){
                            console.log(err);
                        }
                        res.send(JSON.stringify(result));
                
                    })
                })

            }
        });

    }

});


export default app;