'use strict'

const courses = [
    {
        _id: '1',
        title: 'Mi titilo',
        teacher: 'Mi profesor',
        descripcion: 'Una descripcion',
        topico: 'programacion'
    },
    {
        _id: '2',
        title: 'Mi titilo 2',
        teacher: 'Mi profesor 2',
        descripcion: 'Una descripcion 2',
        topico: 'programacion 2'
    },
    {
        _id: '3',
        title: 'Mi titilo 3',
        teacher: 'Mi profesor 3',
        descripcion: 'Una descripcion 3',
        topico: 'programacion 3'
    }
]

module.exports = {
    Query:{
        getCourses  : () => { 
            return courses;
        },
        getCourse: (root, args) =>{
            const course = courses.find((course) => 
                course._id === args.id
            )
            return course
        }
    }
}