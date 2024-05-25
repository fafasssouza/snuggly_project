import { IAggregateRoot } from "./domain/primitives/aggregate_root_impl";
import { ModelMediator } from "./infra/model_mediator";
import { MyContext } from "./infra/my_context";
import { IMediator } from "./shared/mediator_impl";

export class Manager implements IMediator
{
    components: IAggregateRoot[];
    myContext: MyContext;

    //DI its just doing here.
    constructor(myContext: MyContext, components?: IAggregateRoot[]) 
    {
        // Every Component may be to created here
        this.components = components;
        this.myContext = myContext;
    }

    send(context?: any) 
    { //mediator implementation
        
    }
}