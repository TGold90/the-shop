const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/your/sequelize/config'); // Adjust the path as necessary
const User = require('./User'); // Import the User model


class Cart extends Model { }

Cart.init({
    // ID is automatically created by Sequelize
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // Assuming a user can have only one active cart at a time
        references: {
            model: 'users', // 'users' refers to the table name
            key: 'id',      // 'id' refers to the column name in users table
        }
    },
    // You can add more fields here if needed, such as status or timestamps for specific actions
    // Sequelize automatically adds the fields createdAt and updatedAt
}, {
    sequelize,
    modelName: 'cart'
    // Other model options...
});

Cart.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

module.exports = Cart;
