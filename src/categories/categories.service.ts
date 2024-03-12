import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "src/schemas/category.schema";
import { CreateCategoryDto } from "./dtos/CreateCategory.dto";
import { User } from "src/schemas/User.schema";

@Injectable()
export class CategoriesService{
    constructor(
    @InjectModel(Category.name)private categoryModel:Model<Category>,
    @InjectModel(User.name)private userModel:Model<User>,
    ){}

    async createCategory({userId,...createCategoryDto}:CreateCategoryDto){
        const findUser =await this.userModel.findById(userId)
        if(!findUser) throw new HttpException('User Not Found',404);
        const newCategory=new this.categoryModel(createCategoryDto);
        const savedCategory=await newCategory.save()
        return savedCategory
    }

    findCategoryById(){}
}