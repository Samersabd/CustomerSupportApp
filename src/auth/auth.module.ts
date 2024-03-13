import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategies';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/User.schema';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';

@Module({
  imports:[
    UsersModule,
     PassportModule.register({defaultStrategy: 'jwt'}),
     JwtModule.registerAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService)=>{
        console.log(config.get<string | number>('JWT_EXPIRES'))
        return{
          secret:config.get<string>('JWT_SECRET'),
          signOptions:{
            expiresIn:config.get<string | number>('JWT_EXPIRES')},

        }
      }
    }),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
  ],

     
  controllers:[AuthController],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  exports:[AuthService, JwtStrategy, PassportModule]
})
export class AuthModule {}
