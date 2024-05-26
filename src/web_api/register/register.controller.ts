import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post} from "@nestjs/common";
import { IUser } from "src/domain/user/user_impl";
import { RegisterService } from "./register.service";

@Controller('api/register')
export class RegisterController
{
    private service: RegisterService;
    constructor(service: RegisterService)
    {
        this.service = service;
    }

    @Post()
    @HttpCode(204)
    async create(@Body() userRequest: IUser) : Promise<any>
    {
        try
        {
            this.service.createNewUser(userRequest);
            return 'Usuário criado com sucesso!';
        }
        catch(e)
        {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Unexpected Error:",
            }, HttpStatus.FORBIDDEN, {
                cause: e,
            });
        }
        
    }
}