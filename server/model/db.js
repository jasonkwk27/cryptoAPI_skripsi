import mysql from 'mysql'
import { host as _host, user as _user, password as _password, database as _database } from "../config/db-configuration.js";

var connection = mysql.createPool({
  host: _host,
  user: _user,
  password: _password,
  database: _database
});

export default connection;