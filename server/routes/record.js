const express = require("express");
// const { MongoClient } = require("mongodb");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

//This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

//This is a pass for client on db
// const cilent = new MongoClient(process.env.ATLAS)

//This section will help you get a list of all the records
recordRoutes.route("/record/").get(function (req, res) {
  async function run() {
    try {
      let db_connect = dbo.getDb();
      // console.log("-----------------------------------------------------------------------------------")
      // console.log("here is on record.js")
      const collection = db_connect.collection("tasks");
      // const query = { title: "asdf" };

      //get multiple documents
      const cursor = await collection.find();
      // if ((await collection.countDocuments()) === 0) {
      //   console.log("No documents found!");
      // }

      //convert a list of all the document into array
      const result = await cursor.toArray();
      //send a result(document to client)
      res.json(result);
    } catch {
      console.dir;
    }
  }

  //implement run functions
  run();
});

//This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("tasks").findOne(myquery, function (err, result) {
    if (err) throw err;
    //check what result is
    console.log(result);
    console.log(res.json(result));
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, res) {
  async function addTask() {
    try {
      let db_connect = dbo.getDb();
      const collection = db_connect.collection("tasks");
      let myobj = {
        deadline: req.body.deadline,
        title: req.body.title,
        content: req.body.content,
        done: req.body.done,
      };
      const insertedId = db_connect.collection("tasks").insertOne(myobj);
      console.log("-----------------------")
      console.log(insertedId["insertedId"])
      // const objectid = new ObjectId(req.params.id);
      // let myquery = { _id: objectid };
      const result = await collection.find().sort({_id:-1}).limit(1).toArray()
      console.log("----------------1 document added----------------------")
      // console.log(myquery)
      console.log(result);
      res.json(result);
    } finally {
    }
  }
  addTask();
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  console.log(
    "---------------------------------------------------------------"
  );
  console.log("here is on update route");
  async function update() {
    try {
      const db_connect = dbo.getDb();
      //check
      const objectid = new ObjectId(req.params.id);
      console.log(objectid);
      const myquery = { _id: objectid };
      console.log("this is myquery");
      // console.log(myquery)
      const newvalues = {
        $set: {
          done: 1,
        },
      };
      const options = { returnDocument: "after" };
      const collection = db_connect.collection("tasks");
      // console.log("here is under collection")
      const result = await collection.findOneAndUpdate(
        myquery,
        newvalues,
        options
      );
      console.log("1 document updated");
      console.log(result);
      //probably need to fix
      response.json(result);
    } catch {
      console.dir;
    }
  }
  update();
  // .updateOne(myquery, newvalues, function (err, res) {
  //   if (err) throw err;
  //   console.log("1 document updated");
  //   response.json(res);
  // });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  async function run(){
    try{
      let db_connect = dbo.getDb();
      const collection = db_connect.collection("tasks");
      const objectid = new ObjectId(req.params.id);
      let myquery = { _id: objectid };
      const result = collection.deleteOne(myquery);
      console.log("1 document deleted");
      console.log(response.json(result));
    }finally{

    }
  }
  // run.catch(console.dir);
  run();
  
});

module.exports = recordRoutes;
