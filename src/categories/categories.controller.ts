import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { CreateCategoryDto } from "./dtos/CreateCategory.dto";
import { CategoriesService } from "./categories.service";

@Controller('Categories')
export class CategoriesController{
    constructor(private categoryService:CategoriesService){}
    
    @Post()
    createCategory(@Body(ValidationPipe) createCategoryDto:CreateCategoryDto){
        return this.categoryService.createCategory(createCategoryDto)
        
    }
}