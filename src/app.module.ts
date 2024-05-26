import { Module } from '@nestjs/common';
import { RegisterModule } from './web_api/register/register.module';

@Module({ //to import the modules
    imports: [RegisterModule],
})
export class AppModule {}
