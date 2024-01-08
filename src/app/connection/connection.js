import pg from 'pg';
const { Client } = pg;

const conn = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'nyc_postgis_db',
  password: '5432',
  port: 5432,
});

conn.connect();

export const operation = async (sql, values = "") => {
  return new Promise((resolve, reject) => {
    conn.query(sql, values, (error, result) => {
      if (error) return reject(error);
      return resolve(JSON.parse(JSON.stringify(result.rows)));
    });
  });
};

export default conn;
