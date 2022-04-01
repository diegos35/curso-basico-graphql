#first comands
$ npm i -g npx
$ npx license mit > LICENSE && npx gitignore node && git init && npm init -y
$ npm i graphql


Actualmente tu defines varias APIs tipo REST para traer cierta información. Si quieres añadir nuevos campos al servicio REST que tendrías que hacer? Modificar toda la API para añadir ese campo. GraphQL lo que entraría a hacer es encargarse de llamar esas APIs y tu defines en la query de GraphQL si quieres obtener un campo o quitarlo de tu consulta, así, no tendrías que estar modificando APIs en todo momento si quieres construir una respuesta con unos campos específicos.