var mysql= require('mysql');
const { on } = require('nodemon');

var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
})