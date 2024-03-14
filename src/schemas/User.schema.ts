import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema({
    timestamps:true
})
export class User extends Document{
    @Prop()
    Firstname:string;

    @Prop()
    Lastname:string;

    @Prop({unique:true, required:true})
    email:string

    @Prop({required:true})
    password:string
    @Prop()
    isVIP?:boolean
    @Prop()
    isAdmin?:boolean

}
export const UserSchema=SchemaFactory.createForClass(User);