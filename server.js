const express = require('express');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
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

  

