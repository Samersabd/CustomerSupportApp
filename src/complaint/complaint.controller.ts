import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { Complaint } from 'src/schemas/complaint.schema';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';

@Controller('complaints')
export class ComplaintController {
    constructor(private complaintService :ComplaintService){

    }
    @Get()
    async getAllComplaints():Promise<Complaint[]>{
        return this.complaintService.findAll()
    }
    @Post()
    async createComplaint(@Body()complaint:CreateComplaintDto):Promise<Complaint>{
        return this.complaintService.create(complaint);
    }


    @Get(':id')
    async getComplaint(@Param('id')id: string):Promise<Complaint>{
        return this.complaintService.findById(id)
    }

    @Put(':id')
    async updateComplaint(@Param('id')id: string,@Body()complaint:UpdateComplaintDto,):Promise<Complaint>{
        return this.complaintService.updateById(id,complaint);
    }
}
