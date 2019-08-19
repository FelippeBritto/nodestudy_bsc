/* SERVIDOR HTTP
 const http = require("http");

http
    .createServer((req, res) => {
       console.log(req);
        return res.end("Hello world!");
    })
    .listen(3000);*/
const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});
app.use(express.urlencoded({ extended: false }));

app.set('view engine', "njk");
/*app.get('/', (req, res) => {
    return res.send(`Bem vindo, ${req.query.name}`);
});*/
const users = ['Pedro', 'Toin', 'Zé'];

app.get('/', (req, res) => {
    return res.render('list', { users })
});
app.get('/new', (req, res) => {
        return res.render("new");
    })
    /*app.get('/json/:name', (req, res) => {
        return res.json({
            message: `Bem-vindo, ${req.params.name}`
        });
    });
    */

app.post('/create', (req, res) => {
    users.push(req.body.user);
    return res.redirect("/")
})
app.listen(3000);