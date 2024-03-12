import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})
export class User{
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