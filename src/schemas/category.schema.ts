import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./User.schema";


@Schema()
export class Category{
    @Prop({required:true})
    name:string

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'User'})
    userId:User
}
export const CategorySchema =SchemaFactory.createForClass(Category)