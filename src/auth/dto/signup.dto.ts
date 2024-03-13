import { IsEmail, IsNotEmpty, IsString, MinLength, IsBoolean, IsOptional } from "class-validator"

export class SignUpDto{
    @IsNotEmpty()
    @IsString()
    readonly Firstname:string

    @IsNotEmpty()
    @IsString()
    readonly Lastname:string

    @IsNotEmpty()
    @IsEmail({},{message:"Please enter correct email"})
    readonly email:string


    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password:string

    @IsBoolean()
    @IsOptional()
    isVIP: boolean;

    @IsOptional()
    @IsBoolean()
    isAdmin: boolean;
}