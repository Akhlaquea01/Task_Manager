//CRUD :-create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID
//or
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)
//conection stablised to the server

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    // console.log('successfully connec.dbted......')

    const db = client.db(databaseName) // to insert a data into database

    // db.collection('users').insertOne({
    //     name: 'Firoz khan',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert new user')
    //     }
    //     console.log(result.ops)
    // })


    // db.collection('users').insertMany([
    //     {
    //         name: 'Akhlaque ',
    //         age: 22
    //     },
    //     {
    //         name: 'Firoz khan',
    //         age: 22
    //     }

    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert new user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Akhlaque2 ',
    //         age: 22,
    //         desrcription:'full stack web development',
    //         completed:true
    //     },
    //     {
    //         name: 'Firoz khan2',
    //         age: 22,
    //         desrcription:'full stack web development',
    //         completed:true
    //     }

    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert new user')
    //     }
    //     console.log(result.ops)
    // })

    //to retrive dtat from the database
    //1. Retrive data by name
    // db.collection('users').findOne({name:'Firoz khan'},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to find.......')
    //     }

    //     console.log(user)
    // })

    //2.Retrive dta by id

    // db.collection('users').findOne({_id:ObjectID("5fcf44ebdd997623544e2538")},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to find.......')
    //     }

    //     console.log(user)
    // })

    //3.Retrive dta by age attribute

    // db.collection('users').find({age: 22}).toArray((error,user)=>{
    //     if(error){
    //         return console.log('Unable to find.......')
    //     }

    //     console.log(user)
    // })

    // update data of database//

    // const updatePromise = db.collection('users').updateOne({
    //     _id: ObjectID("5fcf44ebdd997623544e2538")
    // }, {
    //     $set: {
    //         name: 'Dude'
    //     },
    //     $inc:{
    //         age:1
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // });
    // const updatePromise = db.collection('users').updateMany({

    //     completed: true
    // },
    //     {
    //         $set: {
    //             coompleted: false
    //         }

    //     }).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     });

    /// delete data   from database

    // const updatePromise = db.collection('users').deleteMany({
    //     age:23
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(error)
    // });
    const updatePromise = db.collection('users').deleteOne({
        name : "Jen"
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(error)
    });
})
// cd C:\Users\akhla\mongodb\bin
// .\mongod.exe --dbpath=\Users\akhla\mongodb-data