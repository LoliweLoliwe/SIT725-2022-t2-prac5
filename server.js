require('dotenv').config()
var express = require("express")
var app = express()
var cors = require('cors')
//let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");
let userRoutes = require("./routes/userRoutes");

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects', projectRoutes)
app.use('/api/user', userRoutes)

//const cardList = [
//    {
//        title: "Mjita 2",
//        image: "haircut.jpg",
//        link: "About transformation",
//        desciption: "Demo desciption about a man having a haircut"
//    },
//    {
//        title: "Sir",
//        image: "after.jpg",
//        link: "About a man afterwards",
//        desciption: "Demo desciption of a man in a suit"
//    }
//  ]

//const MongoClient = require('mongoDb').MongoClient;

//database connection ...
//const uri = "mongodb+srv://Loliwe:ndimlo@cluster0.cdprnzl.mongodb.net/?retryWrites=true&w=majority"
//const client = new MongoClient(uri,{ useNewUrlParser: true })

//const createColllection = (collectionName) => {
//  client.connect((err,db) => {
//    projectCollection = client.db().collection(collectionName);
//    if(!err) {
//      console.log('MongoDB Connected')
//    }
//    else {
//      console.log("DB Error: ", err);
//      process.exit(1);
//    } 
//  })
//}

//app.post('/api/projects',(req,res) => {
//  console.log("New Project added", req.body)
//  var newProject = req.body;
//  insertProjects(newProject,(err,result) => {
//    if(err) {
//      res.json({statusCode: 400, message: err})
//    }
//    else {
//      res.json({statusCode: 200, message:"Project Successfully added", data: result})
//    }
//  })
//})

// insert project...
//const insertProjects = (project,callback) => {
//  projectCollection.insert(project,callback);
//}

//app.get('/api/projects',(req,res) => {
//  getProjects((err,result) => {
//    if(err) {
//      res.json({statusCode: 400, message: err})
//    }
//    else {
//      res.json({statusCode: 200, message:"Success", data: result})
//    }
//  })
//})

// get project...
//const getProjects = (callback) => {
//  projectCollection.find({}).toArray(callback);
//}
 

var port = process.env.port || 3000;

app.listen(port,()=>{
  console.log("App listening to "+ port)
  //createColllection("amajita")
})