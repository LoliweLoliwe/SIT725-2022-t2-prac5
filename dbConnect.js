require('dotenv').config()
const MongoClient = require('mongoDb').MongoClient;

//database connection ...
const uri = "mongodb+srv://Loliwe:ndimlo@cluster0.cdprnzl.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri,{ useNewUrlParser: true })

client.connect((err,db) => {
    projectCollection = client.db().collection(collectionName);
    if(!err) {
      console.log('MongoDB Connected')
    }
    else {
      console.log("DB Error: ", err);
      process.exit(1);
    }
})

module.MongoClient = client;