import { createPool } from "mysql2/promise";

// export const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "conffiguracion",
//   database: "contracts_database",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

export const pool = createPool({
  host: "wb27jpj4hb4i.us-east-1.psdb.cloud",
  user: "tzn6nxqwosw1",
  password: "pscale_pw_nV54XEykFAJrYSDoS_wG30JhFkZwqtslOW-TFczv7Q8",
  database: "contracts_database",
  ssl: {
    rejectUnauthorized: false,
  },
});
