const express = require('express');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Aplicación escuchando en el puerto 3000');
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

const express = require('express');

const app = express();

app.get('/api/data', (req, res) => {
  const data = [1, 2, 3, 4, 5];
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
  

