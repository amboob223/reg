const POOL = require("pg").Pool;
const pool = new POOL({
    user: "playabook",
    password: "8896",
    host: "localhost",
    port: 5432,
    database: "gericka"
});

module.exports = pool; 