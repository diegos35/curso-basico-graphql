'use strict'

const connectDb = require('./db');
const { ObjectId   } = require('mongodb')

module.exports = {
    getCourses  : async () => { 
        let db
        let courses = []
        try {
            db =  await connectDb() //conexion asincrona
            courses = await db.collection('courses').find().toArray()  //consulta, (db es la base de datos seleccionada)
        } catch (error) {
            console.error(error)
        }
        
        return courses;
    },
    getCourse: async (root, {id}) =>{
        let db
        let course = []
        try {
            db =  await connectDb() //conexion asincrona
           course = await db.collection('courses').findOne({ _id: ObjectId  (id) })
        } catch (error) {
            console.error(error)
        }
        
        return course;
    }
}