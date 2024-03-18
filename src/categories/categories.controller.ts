import { Body, Controller, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { CreateCategoryDto } from "./dtos/CreateCategory.dto";
import { CategoriesService } from "./categories.service";
import { Roles } from "src/auth/roles/roles.decorator";
import { AuthGuard } from "@nestjs/passport";
import { RoleGuard } from "src/auth/role/role.guard";

@Controller('Categories')
export class CategoriesController{
    constructor(private categoryService:CategoriesService){}
    @Roles('true')
    @UseGuards(AuthGuard,RoleGuard)
    @Post()
    createCategory(@Body(ValidationPipe) createCategoryDto:CreateCategoryDto){
        return this.categoryService.createCategory(createCategoryDto)
        
    }
}