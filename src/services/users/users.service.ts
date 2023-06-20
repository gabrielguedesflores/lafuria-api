import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './../../schemas/users/users.schema';
import { ICreateUserDTO } from 'src/controller/users/dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(user: UserDocument): Promise<any> {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModel.find().exec();
    }

    async update(id: string, updatedUser: UserDocument) {
        return this.userModel.findByIdAndUpdate(id, updatedUser, { new: true });
    }

    async delete(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}
