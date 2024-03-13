//import { Category } from "src/schemas/category.schema"

import { IsOptional, IsString } from "class-validator"

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
}