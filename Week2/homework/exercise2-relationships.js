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
  `DROP TABLE IF EXISTS research_Papers`,
  `CREATE TABLE research_Papers (paper_id int Primary Key NOT NULL AUTO_INCREMENT, paper_title varchar (100), conference varchar(50), publish_date date);`,
  `CREATE TABLE authors_papers (id int Primary Key NOT NULL AUTO_INCREMENT, author_no int, CONSTRAINT fk_auth
    FOREIGN KEY(author_no) REFERENCES authors(author_no), paper_id int, CONSTRAINT fk_paper
    FOREIGN KEY(paper_id) REFERENCES research_Papers(paper_id));`,
  `INSERT INTO research_Papers (paper_title, conference, publish_date) 
  VALUES("Supercollider physics", "Vegas", "1955-02-03"),
  ("Physics of chemoreception", "Vegas", "1955-02-03"),
  ("Physics of nonhermitian degeneracies", "Vegas", "1955-02-03"),
  ("Methods of theoretical physics", "Vegas", "1955-02-03"),
  ("The programming language Pascal", "Vegas", "1955-02-03"),
  (" Applied statistics and the SAS programming language", "Vegas", "1955-02-03"),
  ("Hints on programming language design", "Vegas", "1955-02-03"),
  ("Object oriented programming", "Vegas", "1955-02-03"),
  ("Concurrent object-oriented programming", "Vegas", "1955-02-03"),
  ("The problem of teaching object-oriented programming", "Vegas", "1955-02-03"),
  ("Organofluorine chemistry", "Vegas", "1955-02-03"),
  ("Nanoplasmonics for chemistry", "Vegas", "1955-02-03"),
  ("How to waste time", "Vegas", "1955-02-03"),
  ("Something different", "Vegas", "1955-02-03"),
  ("Chemistry of dioxiranes. 12. Dioxiranes", "Vegas", "1955-02-03"),
  ("Noninvasive diagnosis of deep venous thrombosis", "Vegas", "1955-02-03"),
  ("Technologies for biodiesel production from used cooking oil—A review", "Vegas", "1955-02-03"),
  ("Effects of pretreatments and drying methods on dehydration of mushroom", "Vegas", "1955-02-03"),
  ("Correlation between condylar lift-off and femoral component alignment", "Vegas", "1955-02-03"),
  ("Is computer science science?", "Vegas", "1955-02-03"),
  ("Some computer science issues in ubiquitous computing", "Vegas", "1955-02-03"),
  ("Monographs in Computer Science", "Vegas", "1955-02-03"),
  ("Foundations of computer science", "Vegas", "1955-02-03"),
  ("Indeterminism in quantum physics and in classical physics. Part II", "Vegas", "1955-02-03"),
  ("Integration in functional spaces and its applications in quantum physics", "Vegas", "1955-02-03"),
  ("Exponential operators and parameter differentiation in quantum physics", "Vegas", "1955-02-03"),
  ("Machines, logic and quantum physics", "Vegas", "1955-02-03"),
  ("A theory of humor", "Vegas", "1955-02-03"),
  ("Humor as a double-edged sword: Four functions of humor in communication", "Vegas", "1955-02-03"),
  ("A course in modern linguistics.", "Vegas", "1955-02-03"),
  ("The UMIST database for astrochemistry 1999", "Vegas", "1955-02-03");`,
  `INSERT INTO authors_papers (author_no, paper_id) VALUES
  (1,15),(1,5),(1,4),(2,15),(2,1),(3,11),(4,9),(5,3),(5,4),(6,4),
  (7,13),(7,11),(8,20),(9,24),(10,24),(11,1),(12,15),(13,22),(13,23),(14,1);`,
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
