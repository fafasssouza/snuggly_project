import { IAggregateRoot } from "./domain/primitives/aggregate_root_impl";
import { IMediator } from "./shared/mediator_impl";
import { IUserRepository } from "./domain/user/user_repository_impl";
import { IUser } from "./domain/user/user_impl";
import { User } from "./domain/user/user";


export class Manager implements IMediator
{
    private static instance: Manager;
    private entities: IAggregateRoot[]; 
    private userMediator : IUserRepository; 

    private constructor(userMediator?: IUserRepository) 
    {
        this.userMediator = userMediator;
        this.entities = new Array();
    }

    public static getInstance(userMediator?: IUserRepository) : Manager 
    {
        if(!Manager.instance)
        {
            if(!userMediator)
            {
                throw console.error('Necessary a modelMediator!');
            }
            Manager.instance = new Manager(userMediator);
        }
        return Manager.instance;
    }

    public addEntity(entity: IAggregateRoot): void 
    {
        this.entities.push(entity);
    }

    public notifyUsers() : void
    {
        this.entities.forEach(entity => {
            entity.notify();
        });
    }

    async send(user?: User) : Promise<boolean>
    { //mediator implementation
        //User Implementation
        const newUser: IUser = {id: user.getId, user_name:user.getName, email:user.getEmail(), password: user.getPassword()};
        return this.userMediator.addUserRepository(newUser);// add a new user in repository
    }
}