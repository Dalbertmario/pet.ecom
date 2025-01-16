import { sequelize } from "../config/dbconnect";
import { DataTypes,Model } from "sequelize";

class WISHLIST extends Model {};

WISHLIST.init({
    wishid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    proid:{
        type:DataTypes.INTEGER,
        allowNull:false  
    },
    varid:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    sequelize,
    tableName:'wishlist',
    modelName:'wishlist',
    timestamps:false
}
)
export default WISHLIST