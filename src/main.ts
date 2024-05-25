import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Manager } from './manager';
import { MyContext } from './infra/my_context';
import { ModelMediator } from './infra/model_mediator';

async function bootstrap() 
{ //This function starts the app!
  const modelMediator = new ModelMediator(); //Mediator for models
  
  const myContext = new MyContext(modelMediator);
  myContext.testConnection();
  myContext.setModel();

  const manager = new Manager(myContext);
 
  const app = await NestFactory.create(AppModule);
  await app.listen(8957);
}

bootstrap();