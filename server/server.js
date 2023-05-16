const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "userdetails"
});
db.connect((err)=>{
    if (err) {
        console.error(err);
    }
    else{
        console.log("Connected to database");
    }
});
app.post("/signup",(req,res) =>{
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    db.query("Insert into users (username, password, email) values (?,?,?)",[username,password,email],(err,result) => {
        if(result){
            res.send({status:true,...result});
        }
        else{
            res.send({status:false,message: "Enter Correct details!!"})
        }
    })
});
app.post("/login",(req,res) =>{
    var username = req.body.username;
    var password = req.body.password;

    db.query("select * from users where username=? and password = ?",[username,password],function(err,result,fields){
        if(err)
        {
            res.send({status:false,message: "Enter Correct details!!"});
        }
        else{
            if(result.length>0){
                console.log("Login successful")
                res.send({status:true,...result});
            }
            else{
                res.send({status:false,message: "Enter Correct details!!"})
            }
        }
    })
});

app.listen(8000, () => {
    console.log("running server");
});