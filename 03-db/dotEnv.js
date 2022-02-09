require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

con.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Anslutit till databasen!! Party party!");

    let sql = "SELECT id, name, hp FROM PokemonCards";
    sql = sql + " WHERE id = 2";

    con.query(sql, function(err, result) {
        if (err) {
            throw err;
        }
        console.log('Publiken vi har ett resultat!');
        console.log(result);
        con.end();
    });
});

// console.log(process.env);