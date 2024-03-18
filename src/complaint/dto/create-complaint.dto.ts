//import { Category } from "src/schemas/category.schema"

import { IsEmpty, IsNotEmpty, IsString } from "class-validator"
import { User } from "src/schemas/User.schema"

export class CreateComplaintDto{
    @IsNotEmpty()
    @IsString()
    readonly title:string
    @IsNotEmpty()
    @IsString()
    readonly description:string
    @IsNotEmpty()
    readonly category:string
    
    @IsEmpty({message: 'You cannot pass user id'})
    readonly user:User

}