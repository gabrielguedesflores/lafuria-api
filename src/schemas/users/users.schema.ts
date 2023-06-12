import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    @ApiProperty()
    username: string;

    @Prop({ required: true })
    @ApiProperty()
    password: string;

    @Prop({ required: true })
    @ApiProperty()
    email: string;

    @Prop({ required: true })
    @ApiProperty()
    role: string;

    @Prop()
    @ApiProperty()
    profileImage: string;

    @Prop()
    @ApiProperty()
    coverImage: string;

    @Prop()
    @ApiProperty()
    dateCreated: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
