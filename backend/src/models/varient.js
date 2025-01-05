import { Model,DataTypes } from "sequelize";
import { sequelize } from "../config/dbconnect.js";

class varient extends Model {}

varient.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    varient_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    offerprice:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    weight:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
    modelName:'varient',
    tableName:'varient',
    timestamps:false
})


export default varient