//'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express') 
const { graphqlHTTP } = require('express-graphql')//Middleware de graphql
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
const cors = require('cors')

const app = express() //API DE EXPRESS
const port = process.env.port || 3000    //Definir puerto

const initDB = require('./lib/db');


// Defincion del esquema
const typeDefs = readFileSync(
  join(__dirname, 'lib','schema.graphql'),
  'utf-8' //encode
  )
const schema = makeExecutableSchema({typeDefs, resolvers})
//Modo produccion
const isDev = process.env.NODE_ENV !== 'production';
console.log(isDev)


//Middleware de CORS
app.use(cors())

app.use('/api/', graphqlHTTP({
    schema: schema,
    rootValue: resolvers, //lo que ejecuta objecto que esta en resolvers
    graphiql: isDev //entorno de dev
}))


/**Apliacion de exprees Up */
app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}/api`)
})

/* Conexion a DB mongo compas */
initDB();
