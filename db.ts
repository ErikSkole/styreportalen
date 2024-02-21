import mysql from 'mysql2/promise';

let connectionParams = {
    host: 'cpanel2.norplex.no',
    port: 3306,
    user: 'portalwe_Amalie_Skram',
    password: 'qTdWN^=#l%A6',
    database: 'portalwe_program_public',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }

  const pool = mysql.createPool(connectionParams);

export const query = async (sql: string, values?: any): Promise<any> => {
  const [rows] = await pool.execute(sql, values);
  return rows;
};