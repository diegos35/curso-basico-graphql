'use strict'

const courses = [
    {
        _id: 'anyId',
        title: 'Mi titilo',
        teacher: 'Mi profesor',
        descripcion: 'Una descripcion',
        topico: 'programacion'
    },
    {
        _id: 'anyId',
        title: 'Mi titilo 2',
        teacher: 'Mi profesor 2',
        descripcion: 'Una descripcion 2',
        topico: 'programacion 2'
    },
    {
        _id: 'anyId',
        title: 'Mi titilo 3',
        teacher: 'Mi profesor 3',
        descripcion: 'Una descripcion 3',
        topico: 'programacion 3'
    }
]

module.exports = {
        getCourses  : () => { 
            return courses;
        }
}