//const admin = require('firebase-admin');
const {dbconfig} = require('./config');
const mysql = require('mysql');
const util = require('util');

//const config = require('./config')
//const serviceAccount = require('path/to/serviceAccountKey.json');

/*dmin.initializeApp({
  credential: admin.credential.cert(config.serviceAccount),
  databaseURL: config.databaseURL
});*/
const config={
  host: dbconfig.host,
  user:dbconfig.user,
  password:dbconfig.password,
  database: dbconfig.database

}

const connection = mysql.createConnection(config);

connection.query = util.promisify(connection.query);
module.exports= connection;