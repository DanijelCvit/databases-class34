const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
  multipleStatements: true,
});

function getPopulation(country, name, code, cb) {
  // SQL query without escaping support
  // const sql = `SELECT name,population FROM ${country} WHERE Name = '${name}' and code = '${code}'`;

  const sql = `SELECT population FROM ?? WHERE Name = ? and code = ?`;

  conn.query(sql, [country, name, code], function (err, result) {
    if (err) cb(err);
    if (result?.length == 0) cb(new Error("Not found"));
    cb(null, result);
  });
}

conn.connect();

// SQL injection query, shouldn't work anymore after escaping
getPopulation("country", "' or ''='';select * from country#", "", console.log);

conn.end();
