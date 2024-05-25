import { IMediator } from "src/shared/mediator_impl";
import {uuid4} from "uuid";

export abstract class entity 
{
    protected id: string;
    protected mediator: IMediator;

    public constructor(id?: string, mediator?: IMediator) 
    {
        this.id = id || uuid4();
        this.mediator = mediator; 
    }

    public get getId() : string 
    {
        return this.id;
    }
}