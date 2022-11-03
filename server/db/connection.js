const mongoose = require("mongoose");
// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
  console.log(err);
  console.log("Successfully connected to MongoDB");
});
module.exports = { uri };

////////for mongodb package
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// let dbConnection;
// async function connectToServer() {
//   try {
//     await client.connect();
//     dbConnection = await client.db("test");
//     console.log("Successfully connected to MongoDB.");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     await client.close();
//   }
// }

// function getDb() {
//   return dbConnection;
// }
// module.exports = {
//   connectToServer,
//   getDb,
// };
