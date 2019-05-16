const { Product } = require('../models');

exports.list = async (req, res, next) => {
    let products = await Product.findAll();
    res.json(products);
}

exports.create = async (req, res, next) => {
    let { name, price } = req.body;
    let product = await Product.create({ name, price });
    res.json(product);
}

exports.update = async (req, res, next) => {
    let id = req.params.id;
    let { name, price } = req.body;
    await Product.update({ name, price }, { where: { id: id } });
    let product = await Product.findByPk(id);
    res.json(product);
}

exports.destroy = async (req, res, next) => {
    let id = req.params.id;
    let product = await Product.findByPk(id);
    await Product.destroy({ where: { id: id } });
    res.json({product, msg: 'Deletado com sucesso!'});
}

