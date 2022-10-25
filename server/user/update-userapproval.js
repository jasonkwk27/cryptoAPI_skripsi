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

app.put('/api/user/updateApproval',urlencodedParser,(req,res)=>{
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
                    sql.query(`UPDATE user SET approvalStatus = 1 WHERE username = ?`,[req.body.username],(err,result)=>{
                        if(err){
                            console.log(err);
                        }
                        
                        sql.query(`UPDATE USER SET approvedBy = ? WHERE username = ?`,[jwt.idadmin,req.body.username],(err,result)=>{
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