const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

connection.connect();

const queries = [
  `CREATE TABLE IF NOT EXISTS account (account_number int PRIMARY KEY , balance float);`,
  `CREATE TABLE IF NOT EXISTS account_changes (change_number int PRIMARY KEY AUTO_INCREMENT, account_number int, amount float, changed_date datetime, remark text, CONSTRAINT fk_account FOREIGN KEY (account_number) REFERENCES account(account_number));`,
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
