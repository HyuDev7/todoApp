require("dotenv").config();
// console.log(require("dotenv").config())
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URL;
const client = new MongoClient(Db);

var _db;

module.exports = {
  connectToServer: async function (callback) {
    await client.connect();
    _db = await client.db("todoApp");
    //  console.log(_db)
    if (!_db) {
      return callback(err);
    } else {
      console.log("Successfully connected to MongoDB.");
    }
  },

  getDb: function () {
    return _db;
  },
};
