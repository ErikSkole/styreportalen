import mysql from 'mysql2/promise';

require('dotenv').config()

const host = process.env.DB_HOST
const user = process.env.DB_USER
const pass = process.env.DB_PASS
const db = process.env.DB

let connectionParams = {
    host: host,
    port: 3306,
    user: user,
    password: pass,
    database: db,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }

  const pool = mysql.createPool(connectionParams);

export const query = async (sql: string, values?: any): Promise<any> => {
  const [rows] = await pool.execute(sql, values);
  return rows;
};