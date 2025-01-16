import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/dbconnect.js';

class User extends Model {}

User.init(
    {
        user_id: { // You can explicitly define this if you want, but it's optional
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: false,
        },
        user_email :{
            type:DataTypes.STRING(255),
            allowNull:false,
            unique:true
        },
        user_password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        role: {
            type: DataTypes.ENUM('user', 'admin', 'customer-care'),
            defaultValue: 'user',
        },
        mobile:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        petname:{
            type:DataTypes.STRING(255),
            allowNull:true
        },
        address:{
            type:DataTypes.STRING(300),
            allowNull:false
        },
        houseno:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        pincode:{
            type:DataTypes.INTEGER,
            allowNull:true
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps:false
    }
);

export default User;
