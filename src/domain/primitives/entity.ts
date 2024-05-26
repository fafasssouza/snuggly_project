import { IMediator } from "src/shared/mediator_impl";
import { randomBytes } from "crypto";

export abstract class Entity 
{
    protected id: string;
    protected mediator: IMediator;

    public constructor(id?: string, mediator?: IMediator) 
    {
        this.id = id || this.generateId();
        this.mediator = mediator; 
    }

    public get getId() : string 
    {
        return this.id;
    }

    private generateId() : string
    {
        return randomBytes(32).toString('hex');
    }
}