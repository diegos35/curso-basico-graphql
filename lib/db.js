'use strict';
// Using Node.js `require()`
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const mongoUrl = `mongodb://localhost:27017/myappnode`; //URL de mongocompass o cluster de mongo atlas

let connection;
async function connectDB() {
  if (connection) return connection;
  let db;
  try {
    db = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection = db.db('myappnode');
    console.log('Connected successfully!');
  } catch (err) {
    console.error(err);
  }

  return connection;
}

module.exports = connectDB;



/**first example conection */
/* module.exports = () => {
    const connect = async ()=> {
         await mongoose.connect(
            mongoUrl,
            {//objecto con configuracion
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err){
                    console.log('DB: ERROR !!')
                }else{
                    console.log('Conexion correcta')
                }
            }
        )
    }
    connect();  
} */

/**Two example conection */
/*  async function connectDB() {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('[database] conectada con exito')
        }).catch((e) => {
            console.error('Hubo un error al conectarse con la DB');
            console.error(e);
        });
}

module.exports = connectDB;  */