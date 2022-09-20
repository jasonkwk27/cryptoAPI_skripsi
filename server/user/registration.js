import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import sql from "../model/db.js";

const app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(cors());
var message = "";

var router = express.Router();
router.post('',urlencodedParser,(req,res)=>{
    sql.query(`SELECT * FROM user WHERE username = ?`,[req.body.username],(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length == 1){
            message = "Username already taken!";
            res.send(message);
        }
        else {
            sql.query(
                `INSERT INTO user (username,password,email,name,approvalStatus) VALUES (?,?,?,?,0)`,
                [req.body.username,req.body.password,req.body.email,req.body.name]
                ,(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    message = "Registration form has been submitted! Please wait for admin approval";
                    res.send(message);
            })
        }
    })
});


app.use('/api/user/register',router);

export default app;