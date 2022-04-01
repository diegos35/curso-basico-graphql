//'use strict'

const { graphql, buildSchema } = require('graphql')

// definiendo el esquema
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

// Ejecutar el query hello
graphql({
    schema: schema,
    source: '{hello , saludo }',
    rootValue : resolvers})
.then((data) => {
  console.log(data)
})