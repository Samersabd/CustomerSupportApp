import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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

}

export const ComplaintSchema=SchemaFactory.createForClass(Complaint)