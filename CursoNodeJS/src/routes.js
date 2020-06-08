const express = require('express');
const routes = express.Router();

/*routes.get("/", (req, res) => {
    // Product.create({
    //     title: "React",
    //     description: "Qualquer coisa",
    //     url: "http://www.github.com/facebook/react_native"
    // });

    //res.send("HELLO YASMIN");
    return res.send("HELLO YASMIN");
});*/

const ProductController = require('./controlers/ProductController');

routes.get("/products", ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;