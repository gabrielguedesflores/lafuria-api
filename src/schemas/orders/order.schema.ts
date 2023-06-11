import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop()
    @ApiProperty()
    number: number;

    @Prop()
    @ApiProperty()
    datetime: Date;
    
    @Prop()
    @ApiProperty()
    table: number;

    @Prop()
    @ApiProperty()
    status: string;

    @Prop()
    @ApiProperty()
    observation: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
