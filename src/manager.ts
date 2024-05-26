import { IAggregateRoot } from "./domain/primitives/aggregate_root_impl";
import { IMediator } from "./shared/mediator_impl";
import { IUserRepository } from "./domain/user/user_repository_impl";
import { User } from "./domain/user/user";


export class Manager implements IMediator
{
    private static instance: Manager;
    private entities: IAggregateRoot[]; 
    private userMediator : IUserRepository; 

    private constructor(userMediator?: IUserRepository) 
    {
        this.userMediator = userMediator;
    }

    public static getInstance(userMediator?: IUserRepository) : Manager 
    {
        if(!Manager.instance)
        {
            if(!userMediator)
            {
                throw new Error('Necessary a modelMediator!');
            }
        }
        return Manager.instance;
    }

    public static addEntity(enity: IAggregateRoot): void 
    {
        this.instance.entities.push(enity);
    }

    public static notifyUsers() : void
    {
        this.instance.entities.forEach(entity => {
            entity.notify();
        });
    }

    send(user?: User) : void
    { //mediator implementation
        //this.userMediator.addUserRepository();// add a new user in repository
    }
}