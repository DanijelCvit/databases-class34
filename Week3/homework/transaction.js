const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

connection.connect();

const queries = [
  `START TRANSACTION;`,
  `UPDATE account SET balance = balance - 1000 WHERE account_number = 101;`,
  `UPDATE account SET balance = balance + 1000 WHERE account_number = 102;`,
  `INSERT INTO account_changes 
  (account_number, amount, changed_date, remark)
  VALUES 
  ( 101, -1000, '2021-01-01', 'Give money') , 
  ( 102, 1000, '2021-01-01', 'Receive money');`,
  `COMMIT;`,
];

for (const query of queries) {
  connection.query(query, (error, results, fields) => {
    if (error) {
      throw error;
    }
    console.log("Results ", results);
  });
}

connection.end();
