import { IMediator } from "src/shared/mediator_impl";
import { UserModel } from "./models/user_model";
import { Sequelize } from "sequelize";

export class ModelMediator implements IMediator 
{
    private User: UserModel;
    send(context: Sequelize) 
    {
        this.User = new UserModel(context);
    }
}