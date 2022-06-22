const express = require ('express');
const mysql = require ('mysql');
const app = express();

//create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodemysql'
  });

  // connection
  db.connect((err)=>{
    if(err){
        throw(err);
    }
    console.log('Mysql Connected ! .. ..');
  });

  // Create User
  app.get('/adduser1',(req,res)=>{
    let post = {id:1,email:'ali@gmail.com',password:'1234',fname:'Ali',lname:'Ebrahim'};
    let sql = 'insert into users set ?';
    let query = db.query(sql,post,(err,result)=>{
        if(err){
            throw(err);
        }
        console.log('user 1 Adedd !!!');

    });
  })

app.listen('3000',()=>{
    console.log('server started on port 3000');
});


