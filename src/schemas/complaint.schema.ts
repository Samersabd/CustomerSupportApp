import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./User.schema";
import mongoose from "mongoose";

@Schema({
    timestamps:true
})
export class Complaint{
    @Prop()
    title:string


    @Prop()
    description:string

    @Prop()
    category:string

    @Prop({type :mongoose.Schema.Types.ObjectId, ref:'User'})
    user:User

}

export const ComplaintSchema=SchemaFactory.createForClass(Complaint)