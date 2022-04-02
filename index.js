//'use strict'

const { buildSchema } = require('graphql')
const express = require('express') 
const { graphqlHTTP } = require('express-graphql')//Middleware de graphql
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express() //API DE EXPRESS
const port = process.env.port || 3000    //Definir puerto


// Defincion del esquema
const schema = buildSchema(readFileSync(
  join(__dirname, 'lib','schema.graphql'),
  'utf-8' //encode
  )
)


app.use('/api/', graphqlHTTP({
    schema: schema,
    rootValue: resolvers, //lo que ejecuta objecto que esta en resolvers
    graphiql: true //entorno de dev
}))

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}/api`)
})

