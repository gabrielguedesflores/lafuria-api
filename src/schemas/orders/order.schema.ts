import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {

    @Prop()
    @ApiProperty()
    customer: string;

    @Prop()
    @ApiProperty()
    items: [];
    
    @Prop()
    @ApiProperty()
    total: number;

    @Prop()
    @ApiProperty()
    status: string;

    @Prop()
    @ApiProperty()
    notes: string;

    @Prop()
    @ApiProperty()
    date: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
