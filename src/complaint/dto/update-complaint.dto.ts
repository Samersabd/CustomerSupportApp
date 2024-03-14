//import { Category } from "src/schemas/category.schema"

import { IsEmpty, IsOptional, IsString } from "class-validator"
import { User } from "src/schemas/User.schema"

export class UpdateComplaintDto{
    @IsOptional()
    @IsString()
    readonly title:string

    @IsOptional()
    @IsString()
    readonly description:string

    @IsOptional()
    @IsString()
    readonly category:string

    @IsEmpty({message: 'You cannot pass user id'})
    readonly user:User
}