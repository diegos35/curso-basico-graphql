//'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express') 
const { graphqlHTTP } = require('express-graphql')//Middleware de graphql

const app = express() //API DE EXPRESS
const port = process.env.port || 3000    //Definir puerto


// Defincion del esquema
const schema = buildSchema(`
  type Query {
    hello: String
    saludo: String
  }
`)


//configurar los resolvers
const resolvers = {
	hello  : () => { //debe llamarse igual que la query
		return 'Hola Mundo';
	},
	saludo : () => 'Hola a todos'
};

app.use('/api/', graphqlHTTP({
    schema: schema,
    rootValue: resolvers, //lo que ejecuta objecto que esta en resolvers
    graphiql: true //entorno de dev
}))

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}/api`)
})

