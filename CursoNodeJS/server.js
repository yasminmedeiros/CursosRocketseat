const express = require('express');
const mongoose = require('mongoose');
const requireDir = require("require-dir");
const cors = require('cors');
//Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());
//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', { useNewUrlParser: true }

);
//require('./src/models/Product');
requireDir("./src/models");

//const Product = mongoose.model("Product");

//Rotas
//Primeira rota

app.use('/api', require('./src/routes')); // use recebe qualquer tipo de requisição, não só get

/*app.get("/", (req, res) => {
    Product.create({
        title: "React",
        description: "Qualquer coisa",
        url: "http://www.github.com/facebook/react_native"
    });

    //res.send("HELLO YASMIN");
    return res.send("HELLO YASMIN");
});*/

app.listen(3001);