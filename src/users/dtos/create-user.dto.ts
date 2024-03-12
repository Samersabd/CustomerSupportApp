import { IsBoolean, IsEmail, IsNotEmpty,IsOptional,IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    Firstname:string;

    @IsString()
    @IsNotEmpty()
    Lastname:string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password:string

    @IsBoolean()
    @IsOptional()
    isVIP: boolean;
    @IsOptional()
    @IsBoolean()
    isAdmin: boolean;

}