import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import sql from "../model/db.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

const app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
dotenv.config();
app.use(cors());

app.put('/api/user',urlencodedParser,(req,res)=>{
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
                        sql.query(`UPDATE USER SET username = ?, password = ?,email = ?,name = ? WHERE iduser = ?`,[req.body.username,req.body.password,req.body.email,req.body.name,jwt.iduser],(err,result)=>{
                            if(err){
                                console.log(err);
                            }
                            res.send(JSON.stringify(result.affectedRows));
                        })
                
            }
        });

    }

});

export default app;