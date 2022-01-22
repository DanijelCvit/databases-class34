const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

connection.connect();

const queries = [
  `USE world`,
  `SELECT name FROM country WHERE population > 8000000;`,
  ` SELECT name FROM country WHERE name LIKE "%land%";`,
  `SELECT name FROM city WHERE population > 500000 AND population < 1000000;`,
  `SELECT name FROM country  WHERE continent='Europe';`,
  `SELECT name  FROM country ORDER BY SurfaceArea DESC;`,
  `SELECT name FROM city WHERE CountryCode='NLD';`,
  `SELECT population FROM city WHERE name='Rotterdam';`,
  `SELECT name FROM country ORDER BY SurfaceArea DESC LIMIT 10;`,
  `SELECT name FROM city ORDER BY population  DESC LIMIT 10;`,
  `SELECT SUM(population) AS 'World Population'  FROM country;`,
];

for (const query of queries) {
  connection.query(query, (error, results, fields) => {
    if (error) {
      throw error;
    }

    console.log("the reply is ", results);
    debugger;
  });
}

connection.end();
