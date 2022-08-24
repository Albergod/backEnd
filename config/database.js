import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection(process.env.DATABASE_URL);

export default connection.promise();
// export const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "conffiguracion",
//   database: "contracts_database",
// });
