 const mongoose = require('mongoose');
 const Product = mongoose.model('Product');

 module.exports = {
     async index(req, res) {
         const { page = 1 } = req.query; //1 é valor default
         const products = await Product.paginate({}, { page, limit: 10 }); //{} vazio, são as condições, page->número de página, limit->limite por página.
         return res.json(products);
     },
     async show(req, res) {
         const product = await Product.findById(req.params.id);
         return res.json(product);
     },
     async store(req, res) {
         const products = await Product.create(req.body);
         return res.json(products);
     },
     async update(req, res) {
         const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); //o true é pra indicar que é pra enviar atualizado para a variável product, se for false, retorna o antigo
         return res.json(product);
     },
     async destroy(req, res) {
         await Product.findByIdAndRemove(req.params.id);
         return res.send();
     }

 }