const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/your/sequelize/config'); // Adjust the path as necessary

class Order extends Model { }

Order.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0
        }
    },

}, {
    sequelize,
    modelName: 'order'

});

module.exports = Order;
