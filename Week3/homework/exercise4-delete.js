const util = require("util");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectId;
var url =
  "mongodb+srv://DC:qwfRyFhkG65riFCu@cluster0.bunzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function seedDatabase() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const filter = { Name: "Hoogvliet" };

    const result = await client
      .db("world")
      .collection("city")
      .deleteOne(filter);
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

seedDatabase();
