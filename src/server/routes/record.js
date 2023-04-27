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

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

//This section will help you get a list of all the records
recordRoutes.route("/record").get(function (req, res) {
  async function run() {
    try {
      let db_connect = dbo.getDb();
      const collection = db_connect.collection("tasks");

      //get multiple documents
      const cursor = await collection.find();

      //convert a list of all the document into array
      const result = await cursor.toArray();
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
      const insertedId = await db_connect.collection("tasks").insertOne(myobj);
      console.log("-----------------------");
      console.log(insertedId);
      // const result = await collection.find({}).forEach(doc => console.log(doc));
      const cursor = collection.find({});
      // cursor.forEach((doc) => console.log(doc));
      // .sort({_id:-1}).limit(1).toArray()
      console.log("----------------1 document added----------------------");
      // for checking what document is added
      // console.dir(await cursor.toArray());
      res.json(await cursor.toArray());
      // res.body(await cursor.toArray())
    } finally {
    }
  }
  addTask();
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  // console.log(
  //   "---------------------------------------------------------------"
  // );
  // console.log("here is on update route");
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
      console.log(objectid);
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

recordRoutes.route("/register").post(function (req, res) {
  async function connectDB() {
    try {
      await mongoose.connect(process.env.ATLAS_URI, { dbName: "todoApp" });
      // console.log(req.body);

      newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // console.log(newUser);

      const result = await newUser.save();
      // console.log(result);
      res.json(result);
    } catch (error) {
      console.error(error);
    }
  }

  connectDB();
});

recordRoutes.route("/login").post(function (req, res) {});

module.exports = recordRoutes;
