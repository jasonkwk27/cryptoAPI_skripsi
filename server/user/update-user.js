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
var message = "";

var router = express.Router();

router.post('',urlencodedParser,(req,res)=>{
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
                if(req.body.approvalStatus == 0){
                    sql.query(`UPDATE user SET approvalStatus = 1 WHERE username = ?`,[req.body.username],(err,result)=>{
                        if(err){
                            console.log(err);
                        }
                
                        res.send(message);
                
                    })
                }
                else {
                    sql.query(`UPDATE user SET approvalStatus = 0 WHERE username = ?`,[req.body.username],(err,result)=>{
                        if(err){
                            console.log(err);
                        }
                
                        res.send(message);
                
                    })
                }
            }
        });

    }

});




app.use('/api/user/update-approval',router);

export default app;