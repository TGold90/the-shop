const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/your/sequelize/config'); // Adjust the path as necessary

class OrderItem extends Model { }

OrderItem.init({
    // ID is automatically created by Sequelize
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'orders', // 'orders' refers to the table name
            key: 'id',       // 'id' refers to the column name in orders table
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
        validate: {
            min: 1 // Ensures quantity is at least 1
        }
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0 // Ensures price is not negative
        }
    },
    // Sequelize automatically adds the fields createdAt and updatedAt
}, {
    sequelize,
    modelName: 'orderItem'
    // Other model options...
});

module.exports = OrderItem;