import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Console } from 'console';
import { use } from 'passport';
import { User } from 'src/schemas/User.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userservice:UsersService , private jwtService: JwtService){}

    async validateUser(email:string,password:string){

        const user = await this.userservice.findOne(email);

        if(user && user.password ===password){
            const {email,password, ...rest}=user;
            return rest;
        }
        return null;
    }
    async login(user:any){
        const payload ={name:user._doc.Firstname,id:user._doc._id};
        console.log(user._doc.Firstname);
        
        return {
            access_token:this.jwtService.sign(payload),
        };

    }
}
