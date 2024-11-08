require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/token', (req, res) => {
  const NumeTario = Math.random();
  const payload = { NumeTario };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
  res.json({ AcessToken: token });
});

app.listen(8080, () => {
  console.log(`Servidor rodando na porta 8080`);
});