"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const db_connection_1 = require("./configs/db.connection");
const PORT = process.env.PORT || 3000;
app_1.app.listen(PORT, () => { console.log(`Server running on ${PORT}`); (0, db_connection_1.dbConn)(); });
