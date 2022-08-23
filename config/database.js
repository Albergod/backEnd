import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: "contracts_database",
  user: "8s00ut7smv9z",
  host: "wb27jpj4hb4i.us-east-1.psdb.cloud",
  password: "pscale_pw_CzeJDJXzxFz10xqr5thj9DCn3N_QFxAVkM-G-uNclIs",
});
// export const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "conffiguracion",
//   database: "contracts_database",
// });
