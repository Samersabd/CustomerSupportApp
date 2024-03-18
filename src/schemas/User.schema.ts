import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps:true
})
export class User extends Document{
    @Prop({require: true})
    Firstname:string;

    @Prop({require: true})
    Lastname:string;

    @Prop({unique:true, required:true})
    email:string

    @Prop({required:true})
    password:string
    @Prop({default: false})
    isVIP?:boolean
    @Prop({default: false})
    isAdmin?:boolean

}
export const UserSchema=SchemaFactory.createForClass(User);