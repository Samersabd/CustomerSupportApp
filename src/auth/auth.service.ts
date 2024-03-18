import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';
import { Model } from 'mongoose';
import { use } from 'passport';
import { User } from 'src/schemas/User.schema';
import { Token } from 'src/schemas/Token.schema';
import { UsersService } from 'src/users/users.service';
import* as bcrypt from 'bcryptjs'
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
    //constructor(private userservice:UsersService , private jwtService: JwtService){}

    constructor(@InjectModel(User.name)
     private userModel:Model<User>,
    //private tokenModel:Model<Token>,
     private jwtService: JwtService
     ) {}


    async validateUser(email:string,password:string){

        // const user = await this.userservice.findOne(email);

        // if(user && user.password ===password){
        //     const {email,password, ...rest}=user;
        //     return rest;
        // }
        return null;
    }

    async signUp(signUpDto:SignUpDto) {
        const {Firstname, email,password} =signUpDto

        const checkuser=this.userModel.findOne({email})

        if(checkuser){return "email already exist"}

        const hasedPassword = await bcrypt.hash(password,10)

        const user = await this.userModel.create({
            Firstname,
            email,
            password:hasedPassword
        })
        const token = this.jwtService.sign({id:user._id})

        return {token}
    }

    // async login(user:any){
    //     const payload ={name:user._doc.Firstname,id:user._doc._id};
    //     console.log(user._doc.Firstname);
        
    //     return {
    //         access_token:this.jwtService.sign(payload),
    //     };

    // }

    async login(loginDto:LoginDto){
        const {email, password} =loginDto;
        const user=await this.userModel.findOne({email})
        
        if(!user){
            throw new UnauthorizedException("Invalid email or password")
        }

        const isPasswordMatched =await bcrypt.compare(password, user.password)

        if(!isPasswordMatched){
            throw new UnauthorizedException("Invalid email or password")
        }

        const token = this.jwtService.sign({id:user._id, isAdmin:user.isAdmin})
        //const data =Object.assign(token,{user:user._id})
        //this.tokenModel.create(data)
        return {token}

    }
}
