const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

connection.connect();

const queries = [
  `DROP TABLE IF EXISTS authors_papers`,
  `DROP TABLE IF EXISTS authors`,
  `CREATE TABLE authors (author_no int Primary Key NOT NULL AUTO_INCREMENT, author_name varchar(512), university varchar(512), date_of_birth date, h_index int, gender enum('m', 'f'));`,
  `ALTER TABLE authors ADD column mentor int;`,
  `ALTER TABLE authors ADD CONSTRAINT fk_author FOREIGN KEY(mentor) REFERENCES authors(author_no); `,
  `INSERT INTO authors (author_name, university, date_of_birth, h_index, gender, mentor)
  VALUES ("Einstein", "Harvard", "1899-01-01", 1, "m", null),
  ("Planck", "Harvard", "1899-01-01", 3, "m", null),
  ("Fermi", "Harvard", "1899-01-01", 5, "m", null),
  ("Boltzman", "Yale", "1899-01-01", 2, "m", null),
  ("James", "Yale", "1899-01-01", 7, "m", null),
  ("Heisenberg", "Yale", "1899-01-01", 13, "m", null),
  ("Alex", "Yale", "1899-01-01", 11, "m", null),
  ("Bob", "Yale", "1899-01-01", 12, "m", null),
  ("Tom", "Yale", "1899-01-01", 10, "m", null),
  ("Dick", "Oxford", "1899-01-01", 1, "m", null),
  ("Harry", "Oxford", "1899-01-01", 1, "m", null),
  ("Jones", "Oxford", "1899-01-01", 9, "m", null),
  ("Barbara", "Oxford", "1899-01-01", 1, "f", null),
  ("Beth", "Oxford", "1899-01-01", 1, "f", null),
  ("Elaine", "Oxford", "1899-01-01", 1, "f", null);`,
  `UPDATE authors SET mentor = 12 WHERE author_no = 1`,
  `UPDATE authors SET mentor = 7 WHERE author_no = 2`,
  `UPDATE authors SET mentor = 6 WHERE author_no = 3`,
  `UPDATE authors SET mentor = 12 WHERE author_no = 4`,
  `UPDATE authors SET mentor = 9 WHERE author_no = 5`,
  `UPDATE authors SET mentor = 2 WHERE author_no = 6`,
  `UPDATE authors SET mentor = 7 WHERE author_no = 7`,
  `UPDATE authors SET mentor = 7 WHERE author_no = 8`,
  `UPDATE authors SET mentor = 7 WHERE author_no = 9`,
  `UPDATE authors SET mentor = 11 WHERE author_no = 10`,
  `UPDATE authors SET mentor = 1 WHERE author_no = 11`,
  `UPDATE authors SET mentor = 5 WHERE author_no = 12`,
  `UPDATE authors SET mentor = 1 WHERE author_no = 13`,
  `UPDATE authors SET mentor = 15 WHERE author_no = 14`,
  `UPDATE authors SET mentor = 5 WHERE author_no = 15`,
];

for (const query of queries) {
  connection.query(query, (error) => {
    if (error) {
      throw error;
    }
    console.log("Done");
  });
}

connection.end();
