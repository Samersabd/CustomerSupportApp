import { IsOptional, IsStrongPassword } from "class-validator"
import { CreateUserDto } from "./create-user.dto"
import  {PartialType} from "@nestjs/mapped-types"

export class UpdateUserDto extends PartialType(CreateUserDto){
    @IsOptional()
    Firstname?: string;
    Lastname?: string;
    
    @IsStrongPassword()
    password?: string;

}
