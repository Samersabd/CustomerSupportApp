import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./User.schema";
@Schema()
export class Token extends Document{
    @Prop()
    token:string;

    @Prop()
    status:string;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'User'})
    userId:User

}
export const tokenSchema=SchemaFactory.createForClass(Token);