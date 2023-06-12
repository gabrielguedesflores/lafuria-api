import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from '../../services/users/users.service';
import { User, UserSchema } from '../../schemas/users/users.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
        ])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule { }
