const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

function checkMySQLConnection() {
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      setTimeout(checkMySQLConnection, 2000); 
    } else {
      console.log('Successful connection to MySQL database');
      startServer();
    }
  });
}

function startServer() {
  
  app.get('/add', (req, res) => {
    const name = 'Val'; 
    const insertQuery = `INSERT INTO people (name) VALUES ('${name}')`;

    db.query(insertQuery, (err, result) => {
      if (err) {
        console.error('Error adding name:', err);
        res.send('Erro ao adicionar o nome');
      } else {
        console.log('Name successfully added to people table');
        res.send(`O Nome '${name}' foi adicionado com sucesso a lista de nomes`);
      }
    });
  });

  app.get('/', (req, res) => {
    const selectQuery = 'SELECT name FROM people';

    db.query(selectQuery, (err, results) => {
      if (err) {
        console.error('Error getting list of names:', err);
        res.send('Erro ao obter a lista de nomes');
      } else {
        console.log('List of names retrieved successfully');
        const names = results.map((person) => person.name);
        res.send(`<h1>Full Cycle Rocks!</h1> - Lista de nomes cadastrados: ${names.join(', ')}.`);
      }
    });
  });

  app.listen(port, () => {
    console.log(`Node.js server running on port ${port}`);
  });
}

checkMySQLConnection();