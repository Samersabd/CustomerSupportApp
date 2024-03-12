import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Complaint } from 'src/schemas/complaint.schema';

@Injectable()
export class ComplaintService {
    constructor(@InjectModel(Complaint.name)
    private complaintModel:mongoose.Model<Complaint>
    ){
        
    }
    async findAll():Promise<Complaint[]>{
        const complaints =await this.complaintModel.find();
        return complaints
    }
    async create(complaint:Complaint):Promise<Complaint>{
        const res=await this.complaintModel.create(complaint)
        return res
    }
    async findById(id:string):Promise<Complaint>{
        const complaint=await this.complaintModel.findById(id)

        if(!complaint){
            throw new NotFoundException('Complaint Not found');
        }
        return complaint
    }

    async updateById(id:string, complaint:Complaint):Promise<Complaint>{
        return await this.complaintModel.findByIdAndUpdate(id,complaint,{
            new:true,
            runValidators:true
        })
    }
}
