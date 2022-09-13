let projectModel = require("../models/projects");
//let client = require("../dbConnect");
//let controller = require("../controller")

//let projectCollection;
//setTimeout(() => {
//    projectCollection = client.MongoClient.db().collection("amajita");
//}, 2000)  

// insert project...
//const insertProjects = (project,callback) => {
//    projectCollection.insert(project,callback);
//  }

  const createProjects = (req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    projectModel.insertProjects(newProject,(err,result) => {
      if(err) {
        res.json({statusCode: 400, message: err})
      }
      else {
        res.json({statusCode: 200, message:"Project Successfully added", data: result})
      }
    })
  }

// get project...
//const getProjects = (callback) => {
//    projectCollection.find({}).toArray(callback);
//  }

const retrieveProjects = (req,res) => {
    projectModel.getProjects((err,result) => {
      if(err) {
        res.json({statusCode: 400, message: err})
      }
      else {
        res.json({statusCode: 200, message:"Success", data: result})
      }
    })
}

module.exports = {createProjects, retrieveProjects}