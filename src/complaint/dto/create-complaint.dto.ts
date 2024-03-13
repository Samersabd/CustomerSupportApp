//import { Category } from "src/schemas/category.schema"

import { IsNotEmpty, IsString } from "class-validator"

export class CreateComplaintDto{
    @IsNotEmpty()
    @IsString()
    readonly title:string
    @IsNotEmpty()
    @IsString()
    readonly description:string
    @IsNotEmpty()
    readonly category:string
}