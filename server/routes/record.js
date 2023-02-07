const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

//This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

//This section will help you get a list of all the records
recordRoutes.route("/record/").get(function (req, res) {
  async function run (){
    try{
      let db_connect = dbo.getDb();
      console.log("-----------------------------------------------------------------------------------")
      console.log("here is on record.js")
      const collection = db_connect.collection("tasks");
      const query = { title: "asdf" };
      const result = await collection.findOne(query);
      console.log("check")
      console.log(result);

      res.json(result);
    }catch{
    console.dir;
    }    
  } 

  //implement run functions
  run();
    // const allTasks = cursor.toArray();
    // console.log(res.json())
    // console.log(allTasks)
    // db_connect
    //   .collection("tasks")
    //   .find({})
    //   .toArray(function (err, result) {
    //     if (err) throw err;
    //     res.json(result);
    //   });
});

//This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("tasks")
    .findOne(myquery, function (err, result) {
    if (err) throw err;
    //check what result is
    console.log(result);
    console.log(res.json(result));
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        deadline: req.body.deadline,
        title: req.body.title,
        content: req.body.content,
        done: req.body.done,
    };
    db_connect
        .collection("tasks")
        .insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  //check
  console.log(req);
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      deadline: req.body.deadline,
      title: req.body.title,
      content: req.body.content,
      done: req.body.done,
      //   unique: 0,
    },
  };
  db_connect
    .collection("tasks")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("tasks")
        .deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });
  
  module.exports = recordRoutes;
