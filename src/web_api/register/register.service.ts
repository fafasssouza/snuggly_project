import { Injectable } from "@nestjs/common";
import { IUser } from "src/domain/user/user_impl";
import { UserMapper } from "src/domain/user/user_mapper";
import { Manager } from "src/manager";

@Injectable()
export class RegisterService
{
    private manager: Manager = Manager.getInstance();

    async createNewUser(user: IUser) : Promise<boolean> 
    {
        try
        {
            const mapper : UserMapper = new UserMapper();

            this.manager.addEntity(mapper.toEntity(user, this.manager));
            this.manager.notifyUsers();
            return true;
        }
        catch(e)
        {
            throw console.error("Unexpected Error: " + e);
        }
    }
}