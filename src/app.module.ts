import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { ComplaintModule } from './complaint/complaint.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
  ConfigModule.forRoot({envFilePath:'.env',
  isGlobal:true,
}),
MongooseModule.forRoot(process.env.DB_URI),
  UsersModule,
  CategoryModule,
  AuthModule,
  ComplaintModule

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
