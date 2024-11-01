const express = require("express");
const app = express();
const produtoRota = require("./rotas/produtos");
const layouts = require('express-ejs-layouts');
const { Produto, Tag } = require('./models'); 

app.use(layouts);
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('layout', 'layouts/layout');

app.use('/static', express.static('public'));
app.use("/api/produtos", produtoRota);

app.get("/api", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.get('/', async (req, res) => {
  const produtos = await Produto.findAll();
  res.render('pages/produtos/index', { produtos });
});

app.listen(8080, () => {
  console.log(`Servidor pronto na porta 8080 no ambiente ${process.env.NODE_ENV}`);
});
