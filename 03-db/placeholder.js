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

    /*
    let sql = "INSERT INTO pokemoncards (name,hp) VALUES (?, ?)";
    let data = ['Talonflame', 130];
    con.query(sql, data, function(err, result){
        if (err) {
            throw err;
        }
        console.log(result);
    });
    */

    let sql = "INSERT INTO pokemonfriends SET ?";
    let data = {
        name: "Arilla",
        email: "arilla@gmail.com"
    };
    con.query(sql,data, function(err, result){
        if (err) {
            throw err;
        }
        console.log(result);
    });
});


