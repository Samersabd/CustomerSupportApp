import { Module } from '@nestjs/common';
import { ComplaintController } from './complaint.controller';
import { ComplaintService } from './complaint.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ComplaintSchema } from 'src/schemas/complaint.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Complaint', schema:ComplaintSchema}])],
  controllers: [ComplaintController],
  providers: [ComplaintService]
})
export class ComplaintModule {}
