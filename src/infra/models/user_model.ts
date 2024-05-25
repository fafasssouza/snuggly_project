import { Model, DataTypes, Sequelize } from "sequelize";

export class UserModel 
{
    private context: any;
    constructor(myContext: Sequelize) 
    {
        const sequelize = myContext;
        this.context = {sequelize};
        _User.init({
            id: 
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                primaryKey: true,
            },

            name: 
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false, 
            },

            email:
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },

            password:
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
            }

        }, this.context);
    }
}

class _User extends Model {}