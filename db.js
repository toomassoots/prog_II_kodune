/*const admin = require('firebase-admin');
const config = require('./config')
//const serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(config.serviceAccount),
  databaseURL: config.databaseURL
});

const db = admin.firestore();
*/
const config ={
  port: 3000,
  jwtSecret:'secret',
  dbConfig:{
    url:'localhost',
    user:'root',
    password:'root',
    database:'homeworks'
  }
}
module.exports= config;