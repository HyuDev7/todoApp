
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);

var _db;

module.exports = {
  connectToServer:  async function () {
     await client.connect();
     await client.db("todoApp");
    console.log("Successfully connected to MongoDB."); 
  },

  getDb: function () {
    return _db;
  },
};
