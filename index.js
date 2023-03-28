const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/mydb";
const express = require('express');
const cors = require('cors');


const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// Archivo principal del BACKEND, lo que se envia al front

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/test', (req, res) => {
  MongoClient.connect(uri, (err, client) => {
    if (err) {
      res.status(500).send({ error: 'Error al conectar a la base de datos' });
      return;
    }
    console.log("Conexión exitosa a la base de datos");
    const dbo = client.db("mydb");
    dbo.collection('colection_1').find().toArray((err, users) => {
      if (err) {
        res.status(500).send({ error: 'Error al obtener usuarios' });
        return;
      }
      res.send(users);
      client.close();
    });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
