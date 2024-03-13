import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Complaint } from 'src/schemas/complaint.schema';
import {Query} from 'express-serve-static-core';
@Injectable()
export class ComplaintService {
    constructor(@InjectModel(Complaint.name)
    private complaintModel:mongoose.Model<Complaint>
    ){
        
    }
    async findAll(query:Query):Promise<Complaint[]>{

        const resPerPage=2
        const currentpage =Number(query.page) || 1
        const skip = resPerPage + (currentpage -1)

        const keyword = query.keyword?{
            title:{
                $regex:query.keyword,
                $options:'i'
            }
        }:{}

        const complaints =await this.complaintModel
        .find({...keyword})
        .limit(resPerPage)
        .skip(skip);
        return complaints
    }
    async create(complaint:Complaint):Promise<Complaint>{
        const res=await this.complaintModel.create(complaint)
        return res
    }
    async findById(id:string):Promise<Complaint>{

        const isValidId = mongoose.isValidObjectId(id)

        if(!isValidId){
            throw new BadRequestException('Please enter Correct id ');
        }
        
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
