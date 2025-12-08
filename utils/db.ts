import mysql from "mysql2/promise";
import { dataDB } from "../data/data";

export const db = await mysql.createConnection({
    host: dataDB.host,
    user: dataDB.user,
    password: dataDB.password,
    database: dataDB.database
})