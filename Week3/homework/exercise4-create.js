const util = require("util");
const MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://DC:qwfRyFhkG65riFCu@cluster0.bunzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function seedDatabase() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const myCity = {
      Name: "Hoogvliet",
      CountryCode: "NLD",
      District: "Zuid-Holland",
      Population: "35250",
    };

    const result = await client
      .db("world")
      .collection("city")
      .insertOne(myCity);
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

seedDatabase();
