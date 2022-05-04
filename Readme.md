***-------para corre poroyecto: npm run dev

Resolvers de tipos: traer la relacion 
query studentsQuery{
  getCourses{
    _id
    title
    people{
      _id
      name
      email
    }
  }
}




//JSON COLLECTION course.json

Actualmente tu defines varias APIs tipo REST para traer cierta información. Si quieres añadir nuevos campos al servicio REST que tendrías que hacer? Modificar toda la API para añadir ese campo. GraphQL lo que entraría a hacer es encargarse de llamar esas APIs y tu defines en la query de GraphQL si quieres obtener un campo o quitarlo de tu consulta, así, no tendrías que estar modificando APIs en todo momento si quieres construir una respuesta con unos campos específicos.

#first comands
$ npm i -g npx
$ npx license mit > LICENSE && npx gitignore node && git init && npm init -y
$ npm i graphql
//instalar express y express-graphql: es un middleware que se le pone a express
// node index.js para enceder server de express
## para instalar mongoose npm i mongose


//Query en GQL {

getCourse(id: "1"){
  title
}
  }
## devuelve todos los cursos 
getCourses{
  title
  description
}

*-------Mutation e inputs--------------* 
getCourse(id: "624bd7076e42930498957c51"){
  _id
  title
}

mutation{
  createCourse(input: {
    title: "Curso de ejemplo 5"
    descripcion: "Descripcion 5",
   
  }){ //lo que retorna al guardar
    _id
    title
    descripcion
  }
}


/*------------Repaso-Creando tipo estudiante-------------*/
{
  getCourses{
    _id
    title
    descripcion
  }
}

*----------------alias----------------------*
{
  AllCourses: getCourses{
    _id
    title
    descripcion
  }
  
  getCourse1: getCourse(id:"624c9a059a4dbef3a3aa628f"){
    _id
    title
    descripcion
  }
  
   getCourse2: getCourse(id:"625056b14ca7a7bfa34b8b95"){
        title
    descripcion
		topic
  }
}

*--------------fragments------------------------*
Estructura de un fragment:
fragment x on Schema {
// Body of Schema
}




multiple consultas
query studentsQuery{
  getCourses{
    _id
    title
    people{
      _id
      name
      email
    }
  }
}

mutation addCourse{
  createCourse(input: {
    title: "Curso de ejemplo 8"
    descripcion: "Descripcion 8",
   
  }){
    _id
    title
    descripcion
  }
}


mutation addPersonMutations{
	addPeople(courseID:"624bcb17295c2783be1c9b6b"
  ,personID:"6250c03d94c32c32e8f6b738"){
    _id
  }
}
*-----------Variables----------------------*
mutation AddPersonCourse2 ($course: ID!, $person: ID!){
	addPeople(courseID: $course, personID: $person){
    _id
    title
  }
}
//Query variables
{
  "course": "624bcb17295c2783be1c9b6b",
  "person": "6250c00c2dcb905d842c052f"
}

//2 example 
query GetCourse($cour: ID!){
  getCourse(id: $cour){
    _id
    title
    people{
      _id
      name
    }
  }
}
//Query variables
{
  "cour": "624bcb17295c2783be1c9b6b"
}


*-------------Enums---------------------*
mutation CreatenewCoruse($createinput: CourseInput!){
  createCourse(input: $createinput){
    _id
    title
  }
}
//Query variables
{
  "createinput": {
    "title": "Mi titulo nuevo",
    "teacher": "Profe",
    "descripcion": "Curso de ejemplo",
    "topic": "programacion grahpql",
   	"level": "intermedio"
  }
}

***** ------------Interfaces-----------****
{
  getPeople{
    _id
    name
    email
    ... on Monitor {
      phone
    }
  }
  
}

*--------------------DIRECTIVA IF--------------*
query getPeopleData($monitor: Boolean!){
    getPeople{
    _id
    name
    email
    ... on Monitor  @include(if: $monitor){
      phone
    }
  }
  
}

//other example
query getPeopleData($monitor: Boolean!, $avatar: Boolean!){
    getPeople{
    _id
    name
    ... on Monitor  @include(if: $monitor){
      phone
    }
     ... on Student  @include(if: $avatar){
      avatar
      email
    }
  }
  
}