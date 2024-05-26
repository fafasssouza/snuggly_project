import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Manager } from './manager';
import { MyContext } from './infra/my_context';
import { ModelMediator } from './infra/model_mediator';
import { RegisterModule } from './web_api/register/register.module';

async function bootstrap() 
{ //This function starts the app!
  const modelMediator = new ModelMediator(); //Mediator for models

  const myContext = new MyContext(modelMediator);
  const manager = Manager.getInstance(modelMediator);
  
  myContext.testConnection();
  myContext.setModel();   

  const app = await NestFactory.create(AppModule);
  await app.listen(8957);  
}

bootstrap();