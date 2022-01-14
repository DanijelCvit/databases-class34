const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

connection.connect();

const create_query = [
  `DROP database meetup;`,
  `CREATE database meetup;`,
  `USE meetup`,
  `CREATE TABLE Invitee (invitee_no int, invitee_name varchar(50), invited_by varchar(50));`,
  `CREATE TABLE Room (room_no int, room_name varchar(50), floor_number int);`,
  `CREATE TABLE Meeting (meeting_no int, meeting_title varchar(50), starting_time datetime, ending_time datetime, room_no int);`,
  `INSERT INTO Invitee VALUES (1, 'James', 'Alice'), (2, 'Bob', 'James'), (3, 'Dan', 'Alice'), (4, 'Wilson', 'Jean'), (5, 'Jean', 'Dan');`,
  `INSERT INTO Room VALUES (1, 'Lounge', 1), (2, 'Dining Area', 1), (3, 'Bedroom', 2), (4, 'Kitchen', 1), (5, 'Bathroom', 2);`,
  `INSERT INTO Meeting VALUES (1, 'Review', '2021-07-01 12:00:00', '2021-07-01 12:30:00', 1), (2, 'Lunch', '2021-07-01 12:00:00', '2021-07-01 12:30:00', 1),
  (3, 'Brainstorm', '2021-07-01 12:00:00', '2021-07-01 12:30:00', 3),(4, 'Sprint', '2021-07-01 12:00:00', '2021-07-01 12:30:00', 2),(5, 'Relax', '2021-07-01 12:00:00', '2021-07-01 12:30:00', 5);`,
];

for (const query of create_query) {
  connection.query(query, (error, results, fields) => {
    if (error) {
      throw error;
    }
    console.log("the reply is ", results);
  });
}
connection.end();
