import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
//import { NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name)private userModel: Model<User>){

    }

    findAll(){

        return this.userModel.find()
    }
    findOne(email:string){
        return this.userModel.findOne({"email":email})
    }

    create(creatUserDto:CreateUserDto){
        const newUser =new this.userModel(creatUserDto)
        return newUser.save()
    }
    update(id:string, updateuserDto:UpdateUserDto){
       return this.userModel.findByIdAndUpdate(id,updateuserDto, {new:true})

    }

    delete(id:string){
        return this.userModel.findByIdAndDelete(id)
    }
}
