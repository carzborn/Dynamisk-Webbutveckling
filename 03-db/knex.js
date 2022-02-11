require('dotenv').config();
const mysql = require('mysql');

const knex = require('knex');
const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

/* connection.select().table('pokemoncards').then((result) => {
    console.log(result);
    result.forEach(r => {
        console.log('Pokemon har namnet ' + r.name + ' med ' + r.hp + ' hp');
    });
}); */

/* connection.select('id', 'name').table('pokemoncards').then((result) => {
    console.log(result);
    result.forEach(r => {
        console.log('På index ' + r.id + ' finns ' + r.name);
    });
}); */

/* connection.select('id', 'name').where({id:2}).orWhere({id:4}).table('pokemoncards').then((result) => {
    console.log(result);
}); */

/* connection.select('id', 'name').whereIn('id', [2,4,6]).table('pokemoncards').then((result) => {
    console.log(result);
}); */

connection('pokemoncards').where('id', 1).select().then(result => {
    console.log(result);
});

connection('pokemoncards').insert({name: 'nodemon', hp: '666'}).finally((result) => {
    console.log(result);
})

/* const s = 1;
setTimeout(() => {
    process.exit(0);

},s*1000) */