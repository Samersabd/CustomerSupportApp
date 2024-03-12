import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import mongoose from 'mongoose';

@Controller('users')
export class UsersController {
    
    constructor(private readonly userService:UsersService){}

    @Get()//GET /users or /users?role=value
    findAll(){
        return this.userService.findAll();
    }
    @Get(':email')//GET /users?:id
    async findOne(@Param('email') email:string){
        // const isValid=mongoose.Types.ObjectId.isValid(email)
        // if(!isValid)throw new HttpException('User not Found',404)
        const findUser = await this.userService.findOne(email);
        if(!findUser)throw new HttpException('User not Found',404)
        return findUser
    }
    @Post() //POST /users
    create(@Body(ValidationPipe)creatUserDto: CreateUserDto){
        return this.userService.create(creatUserDto);
    }
    @Patch(':id')//PATCH or put /users/:id
    async update(@Param('id')id:string, @Body(ValidationPipe) updateUserDto:UpdateUserDto){
        const isValid=mongoose.Types.ObjectId.isValid(id)
        if(!isValid)throw new HttpException('Invalid ID',400)
        const updatedUser =await this.userService.update(id,updateUserDto)
        if(!updatedUser)throw new HttpException('User Not Found',404)
        return updatedUser;
    }
    @Delete(':id')// DELETE /users/:id
    async delete(@Param('id') id:string){
        const isValid=mongoose.Types.ObjectId.isValid(id)
        if(!isValid)throw new HttpException('Invalid ID',400)
        const deletedUser= await this.userService.delete(id)
        if(!deletedUser)throw new HttpException('User Not Found',404)
        return ;
}
}