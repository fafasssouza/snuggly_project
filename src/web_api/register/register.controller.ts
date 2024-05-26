import { Controller, Post} from "@nestjs/common";

@Controller('api/regiser')
export class RegisterController
{
    @Post()
    async create() : Promise<any>
    {
        
    }
}