import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "wb27jpj4hb4i.us-east-1.psdb.cloud",
  user: "07o9fv29h8pf",
  database: "contracts_database",
  password: "pscale_pw_zFTyf0HV_zGU5hLGRu8fA-Ul0HIkbbE0zlGrvJVHCIM",
  ssl: {
    rejectUnauthorized: false,
  },
});

// export const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "conffiguracion",
//   database: "contracts_database",
// });
