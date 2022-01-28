/*  Below query will output population of all countries;
SELECT  population FROM country WHERE name = ''*'' and code = ''*''; */

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

const getPopulation = (country, name, code, cb) => {
  connection.query(
    `SELECT  name, population FROM ${connection.escapeId(
      country
    )} WHERE name = ? and code = ?;`,
    [name, code],
    (err, result) => {
      if (err) {
        cb(err);
      }
      if (result?.length == 0) {
        cb(new Error("Not found"));
      }
      cb(null, result);
    }
  );
};

connection.connect();

getPopulation("country", "Netherlands", "NLD", console.log);

connection.end();
