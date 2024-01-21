const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/your/sequelize/config'); // Adjust the path as necessary
const Cart = require('./Cart'); // Import the Cart model
const Product = require('./Product'); // Import the Product model


class CartItem extends Model { }

CartItem.init({
    // ID is automatically created by Sequelize
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'carts', // 'carts' refers to the table name
            key: 'id',      // 'id' refers to the column name in carts table
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products', // 'products' refers to the table name
            key: 'id',         // 'id' refers to the column name in products table
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1, // Assuming the default quantity is 1
        validate: {
            min: 1 // Ensures quantity is at least 1
        }
    },
    // Additional fields like price can be added if necessary
    // Sequelize automatically adds the fields createdAt and updatedAt
}, {
    sequelize,
    modelName: 'cartItem'
    // Other model options...
});

// CartItem belongs to Cart
CartItem.belongsTo(Cart, {
    foreignKey: 'cartId',
    as: 'cart'
});

// CartItem belongs to Product
CartItem.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product'
});

module.exports = CartItem;
