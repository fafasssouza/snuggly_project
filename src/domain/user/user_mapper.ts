import { IMediator } from "src/shared/mediator_impl";
import { User } from "./user";
import { IUser } from "./user_impl";

export class UserMapper
{
    public toEntity(user: IUser, manager: IMediator) : User
    {
        return new User(user, manager);
    }
}