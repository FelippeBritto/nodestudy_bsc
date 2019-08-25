const express = require('express');
const nunjucks = require('nunjucks')

const app = express();

nunjucks.configure('views', {
   autoescape: true, //Manipular nomes dos arquivos
   express: app, //Variavel que contem o express
   watch: true //Semelhante ao nodemon
});
//Informa ao express que será lido o corpo da requisição.
app.use(express.urlencoded({ extended: false }))

//set dentro de app define que é global
app.set('view engine', 'njk') //njk define que a extensão que será usada.

const users = ['Nome1', 'Nome2', 'Nome3']

app.get('/', (req, res) => {
   return res.render('list', { users })
})

app.get('/new', (req, res) => {
   return res.render('new')
})
//Colocar o mesmo método utilizado no njk
app.post('/create', (req, res) => {
   users.push(req.body.newUser);//Adiciona info ao array
   return res.redirect('/');// Redireciona para principal
})
app.listen(3002);