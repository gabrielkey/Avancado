const express = require('express')
var expressLayouts = require('express-ejs-layouts')

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')

app.set('layout', 'layouts/layout')

app.use(expressLayouts)


app.get('/', (req, res) => {
    res.json({msg: "Hello from Express!"})
})


const produtos = [
    { id: 1, nome: 'Camiseta', preco: 20.00 },
    { id: 2, nome: 'Calça Jeans', preco: 50.00 },
    { id: 3, nome: 'Tênis', preco: 80.00 }
];

app.get('/produtos', (req, res) => {
    res.render('pages/produtos/index', {produtos: produtos});
});

app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})