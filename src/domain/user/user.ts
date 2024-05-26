import { IMediator } from "src/shared/mediator_impl";
import { Entity } from "../primitives/entity";
import { IAggregateRoot } from "../primitives/aggregate_root_impl";
import { Email } from "./value_objects/email";
import { Password } from "./value_objects/password";
import { IUser } from "./user_impl";

export class User extends Entity implements IAggregateRoot 
{
    private _name: string;
    private email: Email;
    private password: Password;

    public constructor(userProps: IUser, mediator?: IMediator) 
    {
        super(userProps.id, mediator);
        this._name = userProps.user_name;
        this.email = new Email(userProps.email);
        this.password = new Password(userProps.password);
    }

    public get getName() : string
    {
        return this._name;
    }

    public getEmail(): string
    {
        const email : string = this.email.getEmail;
        return email; 
    }

    public getPassword() : string
    {
        return this.password.getPassword;
    }
}