const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()
app.use(express.json())

const produtos = {}

app.get('/', (req, res) => {
  res.json({ msg: "Bem vindo!" })
})

app.get('/produtos', (req, res) => {
  res.json({ produtos: Object.values(produtos) })
})

app.post('/produtos', (req, res) => {
  const produto = req.body
  const idProduto = uuidv4()
  produto.id = idProduto
  produtos[idProduto] = produto
  res.json({ msg: "Houve sucesso ao adicionar um novo produto!" })
})

app.put('/produtos/:id', (req, res) => {
  const id = req.params.id
  if (id && produtos[id]) {
    const produto = req.body
    produto.id = id
    produtos[id] = produto
    res.json({ msg: "Atulização do produto bem sucedida!" })
  } else {
    res.status(404).json({ msg: "O produto não foi encontrado ou não existe!" })
  }

})

app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id
  if (id && produtos[id]) {
    delete produtos[id]
    res.json({ msg: " O Produto foi deletado" })
  } else {
    res.status(404).json({ msg: "Produto não foi encontrado!" })
  }
})

const server = app.listen(8080, () => {
  console.log("Servidor pronto na porta 8080");
});

module.exports = server;