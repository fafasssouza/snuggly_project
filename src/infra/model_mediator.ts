import { IMediator } from "src/shared/mediator_impl";
import { UserModel } from "./models/user_model";
import { Sequelize } from "sequelize";
import { IUserRepository } from "src/domain/user/user_repository_impl";
import { IUser } from "src/domain/user/user_impl";

export class ModelMediator implements IMediator, IUserRepository
{
    private User: UserModel;

    public send(context: Sequelize) : void
    {
        this.User = new UserModel(context);
    }

    public async addUserRepository(user: IUser) : Promise<boolean>
    {
        return await this.User.createUser(user);
    }
}