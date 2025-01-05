import { DataTypes,Model } from "sequelize";
import { sequelize } from "../config/dbconnect.js";
class Product extends Model {}


Product.init({
    productid:{
        type:DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
    },
    productimage:{
        type:DataTypes.STRING,
        allowNull: false,

    },
    category:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    productsfor:{
        type:DataTypes.STRING,
        allowNull: false
    },
    brandname:{
        type:DataTypes.STRING,
        allowNull: false
    },
    productname:{
        type:DataTypes.STRING,
        allowNull: false
    },
},
    {
     sequelize,
     tableName:'products',
     modelName:'Products',
     timestamps: false,
    }
)

export default Product