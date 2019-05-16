module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        name: Sequelize.STRING(50),
        price: Sequelize.DECIMAL(8,2)
    });

    return Product;
}