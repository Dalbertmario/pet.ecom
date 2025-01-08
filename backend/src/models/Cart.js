import {Model,DataTypes} from 'sequelize'
import { sequelize } from '../config/dbconnect.js'

class Cart extends Model {}

Cart.init({
   cartid:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
   },
   userid:{
    type:DataTypes.INTEGER,
    allowNull:true
   },
   varientid:{
    type:DataTypes.INTEGER,
    allowNull:false
   },
   productid:{
    type:DataTypes.INTEGER,
    allowNull:false
   },
   quantity:{
    type:DataTypes.INTEGER,
    allowNull:false
   }
},
{
    sequelize,
    tableName:'cart',
    modelName:'Cart',
    timestamps: false,
}
)

export default Cart
