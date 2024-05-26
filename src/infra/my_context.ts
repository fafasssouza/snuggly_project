import { Sequelize } from "sequelize";
import { IMediator } from "src/shared/mediator_impl";

export class MyContext
{
    //private static instance: MyContext;
    public sequelize: Sequelize;
    private mediator: IMediator;

    public constructor(mediator?: IMediator) 
    {
        this.sequelize = new Sequelize(
            process.env.POSTGRES_DB, 
            process.env.POSTGRES_USER, 
            process.env.POSTGRES_PASSWORD, {
            host: process.env.POSTGRES_HOST,
            dialect: 'postgres'
        });   

        this.mediator = mediator;
    }

    /*public static getInstace(mediator?: IMediator) : MyContext 
    {
        if(!MyContext.instance) 
        {
            if(!mediator)
                throw new Error("Mediator is necessary for to create the instance.");
            MyContext.instance = new MyContext(mediator);
        }
        return MyContext.instance;
    }*/

    public async testConnection() 
    {
        try 
        {
            await this.sequelize.authenticate()
            console.log('Connection has been established successfully.');
        } 
        catch (error) 
        {
            console.error('Unable to connect to the database: ', error);
        }     
    }

    /*public static get getSequalize() : Sequelize
    {
        return this.instance.sequelize;
    }*/

    public async setModel() 
    {
        try
        {
            this.mediator.send(this.sequelize);
            await this.sequelize.sync({ alter: true });
        }
        catch(e)
        {
            console.error('This Error Happend: ' + e);
        }
    }
}