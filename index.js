
const express = require('express');
const app = express();

// Archivo principal del BACKEND, lo que se envia al front

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', 'https://jsonplaceholder.typicode.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.get('/api/saludo', (req, res) => {
  res.send('Hola desde el backend!');
});

app.get('/api/data', (req, res) => {
  const data = [1, 2, 3, 4, 5];
  res.json(data);
});

app.get('/api/users', (req, res) => {
  db.collection('users').find().toArray((err, users) => {
    if (err) {
      res.status(500).send({ error: 'Error al obtener usuarios' });
      return;
    }
    res.send(users);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
  



  

