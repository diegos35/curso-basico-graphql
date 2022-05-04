'use strict'

const connectDb = require('./db')
const { ObjectId   } = require('mongodb')
const errorHandler = require('./errorHandler');

module.exports = {
    addPeople: async (root, { courseID, personID }) => {
        let db
        let person
        let course
    
        try {
            db = await connectDb()
            course = await db.collection('courses').findOne(
                { _id: ObjectId(courseID) }
            )
            person = await db.collection('students').findOne(
                { _id: ObjectId(personID)}
            )
            
            if (!course || !person) throw new Error('La persona o el curso no existe')

    
          await db.collection('courses').updateOne(
            { _id: ObjectId(courseID) },
            { $addToSet: { people: ObjectId(personID) } }
          )

        } catch (error) {
            errorHandler(error);
        }
    
        return course
      },
    createCourse: async (root, { input } ) => {
        const defaults = {
            teacher: '',
            topic: ''   
        }
        const newCourse = Object.assign(defaults, input)
        let db
        let course
        try {
            db = await connectDb()
            course = await db.collection('courses').insertOne(newCourse)
            newCourse._id = course.insertedId //devuelve el ultimo id inserted
        } catch (error) {
            errorHandler(error);
            
        }
        return newCourse
    },

    editCourse: async (root, { _id , input }) =>{
        let db
        let course
        try {
            db = await connectDb()
            await db.collection('courses').updateOne({
                _id: ObjectId(_id)},
                { $set: input }
            )
        course = await db.collection('courses').findOne(
            { _id: ObjectId(_id) }
        )

        } catch (error) {
            errorHandler(error);
        }

        return course
    },

    
    deleteCourse: async (root, { _id , input }) =>{
        let db
        let infoCourseDelete
        try {
            db = await connectDb()
            infoCourseDelete = await db.collection('courses').deleteOne({
                _id: ObjectId(_id)},
            )
            return infoCourseDelete.deletedCount > 0;
        } catch (error) {
            errorHandler(error);
        }
        
    },

    createStudent: async (root, { input } ) => {
        let db
        let student
        try {
            db = await connectDb()
            student = await db.collection('students').insertOne(input)
            input._id = student.insertedId //devuelve el ultimo id inserted
        } catch (error) {
            errorHandler(error);  
        }
        return input
    },
    
    editStudent: async (root, { _id , input }) =>{
        let db
        let student
        try {
            db = await connectDb()
            await db.collection('students').updateOne({
                _id: ObjectId(_id)},
                {$set: input}
            )
        course = await db.collection('students').findOne(
            { _id: ObjectId(id) }
        )

        } catch (error) {
            errorHandler(error);
        }

        return course
    },

    deleteStudent: async (root, { _id , input }) =>{
        let db
        let infoDelete
        try {
            db = await connectDb()
            infoDelete = await db.collection('students').deleteOne({
                _id: ObjectId(_id)},
            )

        } catch (error) {
            errorHandler(error);
        }

        return infoDelete.deletedCount ? `El curso con id ${id} fue eliminado exitosamente.`
        : 'No existe el curso con el id indicado';
    }
}
