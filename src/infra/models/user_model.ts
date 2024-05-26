import { Model, DataTypes, Sequelize } from "sequelize";
import { IUser } from "src/domain/user/user_impl";

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

    public async createUser(user: IUser) : Promise<boolean>
    {
        try
        {
           await _User.create({id: user.id, name: user.user_name, email: user.email, password: user.password});
           return true;
        }
        catch(e)
        {
            throw console.error("Error when its trying save a new User in database: " + e);
        }
    }
}

class _User extends Model {}