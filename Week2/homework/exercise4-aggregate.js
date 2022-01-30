const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

connection.connect();

const queries = [
  `SELECT paper_title, COUNT(author_no) AS no_authors FROM research_Papers
  LEFT JOIN authors_papers
  USING (paper_id)
  GROUP BY paper_title;`,
  `SELECT COUNT(1) AS female_authors FROM research_Papers
  INNER JOIN authors_papers
  USING (paper_id)
  INNER JOIN authors
  USING (author_no)
  WHERE gender = 'f';`,
  `SELECT university, AVG(h_index) FROM authors GROUP BY university;`,
  `SELECT university, COUNT(paper_id) AS total_papers FROM authors
  INNER JOIN authors_papers
  USING (author_no)
  GROUP BY university;`,
  `SELECT university,MIN(h_index), MAX(h_index) FROM authors
  GROUP BY university;`,
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
