***-------para corre poroyecto: npm run dev

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

