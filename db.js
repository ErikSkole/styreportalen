// Import the mysql2 module
import mysql from 'mysql2/promise';

// Create a connection object with your database credentials
export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'cpanel2.norplex.no',
    user: 'portalwe_Amalie_Skram',
    password: 'qTdWN^=#l%A6',
    database: 'portalwe_program_public'
  });

  return connection;

}

// Connect to the database
console.log('Connected to the database!');

// Perform queries and operations on the database
const [results, fields] = await connection.query('SELECT * FROM users');
console.log('The query results are: ', results);

// Close the connection when done
await connection.end();
console.log('Disconnected from the database!');