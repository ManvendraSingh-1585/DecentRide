const mysql = require("mysql2");
const express = require("express");
const session = require('express-session');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ride_share"
});
db.connect((err)=>{
    if (err) {
        console.error(err);
    }
    else{
        console.log("Connected to database ride_share");
    }
});
app.use(
  session({
    secret: 'Reiden',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json()); // To parse JSON data
app.use(express.urlencoded({ extended: true }));


app.post("/signup", (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var Phone_number = req.body.phone_number;
  var password = req.body.password;

  const query = `INSERT INTO user (user_name, user_email, user_number, user_password) VALUES (?, ?, ?, ?)`;
  
  db.query(query, [username, email, Phone_number, password], (err, result) => {
    if (result) {
      res.send({ status: true, ...result });
    } else {
      res.send({ status: false, message: "Enter Correct details!!" });
    }
  });
});
  
app.post("/login",(req,res) =>{
    var email = req.body.user_email;
    var password = req.body.password;

    db.query("select * from user where user_email=? and user_password = ?",[email,password],function(err,result,fields){
        if(err)
        {
            res.send({status:false,message: "Enter Correct details!!"});
        }
        else{
            if(result.length>0){
                res.send({status:true,...result});
            }
            else{
                res.send({status:false,message: "Enter Correct details!!"})
            }
        }
    })
});

// Your database setup here

// Endpoint to create a role
app.post('/login/Main_Dashboard/createRole', (req, res) => {
  const role_Name = req.body.roleName;

  const sql = 'INSERT INTO Role (role_name) VALUES (?)';
  db.query(sql, [role_Name], (err, result) => {
    if (err) {
      console.error('Error creating role: ' + err);
      res.status(500).json({ status: false, error: 'Error creating role' });
    } else {
      res.status(200).json({ status: true, role_id: result.insertId });
    }
  });
});

// Endpoint to assign a role to a user
app.post('/login/Main_Dashboard/assignRole', (req, res) => {
  const userId = req.body.user_id;
  const roleId = req.body.roleId;

  const sql = 'INSERT INTO User_Role (user_id, role_id) VALUES (?, ?)';
  db.query(sql, [userId, roleId], (err, result) => {
    if (err) {
      console.error('Error assigning role to user: ' + err);
      res.status(500).json({ status: false, error: 'Error assigning role to user' });
    } else {
      res.status(200).json({ status: true, message: 'Role assigned to user successfully' });
    }
  });
});

app.post('/login/Main_Dashboard/drivers',(req,res)=>{
  var driver_id = req.body.Driver_id;
  var source_address = req.body.start_address;
  var destination_address = req.body.end_address;
  var ride_date = req.body.ride_date;
  var ride_time = req.body.ride_time;
  const sql = 'Insert into ride (driver_id, source_address, destination_address, ride_date, ride_time) values (?, ?, ?, ?, ?)';
  db.query(sql,[driver_id, source_address, destination_address, ride_date, ride_time],(err,result)=>{
    if(err){
      res.status(500).json({status:false,error:'Error creating ride'});
    }
    else{
        res.send({status:true,...result});
    }
  });
});

app.listen(8000, () => {
    console.log("running server");
});
