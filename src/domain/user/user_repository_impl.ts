import { IUser } from "./user_impl";

export interface IUserRepository 
{
    addUserRepository(user: IUser);
}