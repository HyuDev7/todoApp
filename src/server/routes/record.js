require("dotenv").config();
const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

//This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
const mongoose = require("mongoose");
//define users collection schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const taskSchema = new mongoose.Schema({
  uid: String,
  deadline: String,
  title: String,
  content: String,
  done: Number,
});
const User = mongoose.model("User", userSchema);
const Task = mongoose.model("Task", taskSchema);

//This section will help you get a list of all the records
recordRoutes.route("/record/:uid").get(function (req, res) {
  async function run() {
    try {
      // let db_connect = dbo.getDb();
      // const collection = db_connect.collection("tasks");
      mongoose.connect(process.env.ATLAS_URL, { dbName: "todoApp" });
      const reqUid = req.params.uid;
      //get multiple documents
      // const cursor = await collection.find();
      const result = await Task.find({uid:reqUid}).exec();

      //convert a list of all the document into array
      // const result = await cursor.toArray();
      console.log("this is record")
      console.log(result);
      res.json(result);
    } catch {
      console.dir;
    }
  }
  //implement run functions
  run();
});

//This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect.collection("tasks").findOne(myquery, function (err, result) {
//     if (err) throw err;
//     //check what result is
//     console.log(result);
//     console.log(res.json(result));
//     res.json(result);
//   });
// });

// This section will help you create a new record.
recordRoutes.route("/record/add/:uid").post(function (req, res) {
  async function addTask() {
    try {
      // let db_connect = dbo.getDb();
      // const collection = db_connect.collection("tasks");
      // let myobj = {
      //   deadline: req.body.deadline,
      //   title: req.body.title,
      //   content: req.body.content,
      //   done: req.body.done,
      // };
      // const insertedId = await db_connect.collection("tasks").insertOne(myobj);
      // const insertedId = record.save();
      const newUid = req.params.uid;
      const newDeadline = req.body.deadline;
      const newTitle = req.body.title;
      const newContent = req.body.content;
      const newDone = req.body.done;

      mongoose.connect(process.env.ATLAS_URL, { dbName: "todoApp" });

      const record = new Task({
        uid: newUid,
        deadline: newDeadline,
        title: newTitle,
        content: newContent,
        done: newDone,
      });
      const result = record.save();
      console.log("-----------------------");
      console.log(result);
      // const cursor = Task.find({});
      console.log("----------------1 document added----------------------");
      // console.log(cursor);
      // res.json(await cursor.toArray());
      res.json(result);
    } catch (err) {
      console.error(err);
    }
  }
  addTask();
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
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
});

//This section will help you undo a done task by id.
recordRoutes.route("/update/undo/:id").post(function (req, response) {
  async function undo() {
    try {
      const db_connect = dbo.getDb();
      //check
      const objectid = new ObjectId(req.params.id);
      const myquery = { _id: objectid };
      console.log("this is myquery");
      const newvalues = {
        $set: {
          done: 0,
        },
      };
      const options = { returnDocument: "after" };
      const collection = db_connect.collection("tasks");
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
  undo();
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  async function run() {
    try {
      let db_connect = dbo.getDb();
      const collection = db_connect.collection("tasks");
      const objectid = new ObjectId(req.params.id);
      let myquery = { _id: objectid };
      const result = collection.deleteOne(myquery);
      console.log("1 document deleted");
      response.json(result);
    } finally {
    }
  }
  // run.catch(console.dir);
  run();
});

module.exports = recordRoutes;
