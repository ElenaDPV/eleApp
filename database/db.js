const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const uri = "mongodb+srv://elena:verdes22@cluster0.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Error al conectarse a MongoDB: ', err);
    return;
  }
  console.log('Conectado a MongoDB');
  const db = client.db('test');
});
