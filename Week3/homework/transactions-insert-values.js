const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

connection.connect();

const queries = [
  `INSERT INTO account VALUES 
  (101, 100.10), 
  (102, 453.23), 
  (55555, 10000),
  (66612, 45455.12), 
  (45454, 11111.111);`,
  `INSERT INTO account_changes 
  (account_number, amount, changed_date, remark)
   VALUES 
  (101, 100, '2020-01-01', 'Add 100 euro'),
  ( 66612, 1000, '2021-01-01', 'Add 1000 euro'),
  ( 55555, 9999, '2021-11-11', 'Add 9999 euro'),
  ( 102, 2, '2020-01-11', 'Add 2 euro'),
  ( 45454, 1, '2020-03-01', 'Add 1 euro');`,
];

for (const query of queries) {
  connection.query(query, (error, results, fields) => {
    if (error) {
      throw error;
    }
    console.log("Results: ", results);
  });
}

connection.end();
