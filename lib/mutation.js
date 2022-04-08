'use strict'

const connectDb = require('./db')
const { ObjectId   } = require('mongodb')

module.exports = {
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
            console.log(error)
        }

        return course
    },

    createStudent: async (root, { input } ) => {
        let db
        let student
        try {
            db = await connectDb()
            student = await db.collection('students').insertOne(input)
            input._id = student.insertedId //devuelve el ultimo id inserted
        } catch (error) {
            
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
            console.log(error)
        }

        return course
    },

    
}
