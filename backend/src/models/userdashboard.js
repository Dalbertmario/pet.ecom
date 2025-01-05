import { sequelize } from "../config/dbconnect.js";
import { Model, DataTypes } from "sequelize";

class UserDash extends Model {}

UserDash.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    proname:{
      type:DataTypes.TEXT,
      allowNull:true
    }
  },
  {
    sequelize,
    tableName: "dashboard_images",
    modelName: "UserDash",
    timestamps: false,
    underscored: true,
  }
);

export default UserDash;
