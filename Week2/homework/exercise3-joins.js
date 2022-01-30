const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

connection.connect();

const queries = [
  `SELECT A2.author_name AS Name, A1.author_name as Mentor  FROM authors AS A1 INNER JOIN authors AS A2 ON A1.author_no = A2.mentor;`,
  `SELECT
	author_no, author_name, university, date_of_birth, h_index, gender, mentor,
	paper_title
FROM
	authors
	LEFT JOIN authors_papers USING (author_no)
	LEFT JOIN research_Papers USING (paper_id);`,
];

for (const query of queries) {
  connection.query(query, (error, results, fields) => {
    if (error) {
      throw error;
    }
    console.log("Result is ", results);
  });
}

connection.end();
