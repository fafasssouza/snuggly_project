import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { //Função que começa tudo!
  const app = await NestFactory.create(AppModule);
  await app.listen(8957);
}

bootstrap();