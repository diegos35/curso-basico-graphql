'use strict'

const connectDb = require('./db')
const { ObjectId   } = require('mongodb')
const errorHandler = require('./errorHandler');


module.exports = {
    Course:{ //lo que estoy consultando cursos
        people: async ({ people }) => { //funcion lo que quiero resolver
            let db 
            let peopleData
            let ids

            try {
                db = await connectDb()
                ids = people ? people.map(id => ObjectId(id)) : []
                peopleData = ids.length > 0 
                    ? await db.collection('students').find(
                        {_id: {$in: ids}} //$in: le pasamos all ids
                    ).toArray()
                    : []


            } catch (error) {
                errorHandler(error)
            }

            return peopleData
        }
    },

    Person: {
        __resolveType: (person, context, info) => {
          if (person.phone) {
            return 'Monitor'
          }
    
          return 'Student'
        }
      }
}
