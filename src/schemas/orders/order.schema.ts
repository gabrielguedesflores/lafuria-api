import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop()
    number: number;
    @Prop()
    datetime: Date;
    @Prop()
    table: number;
    @Prop()
    status: string;
    @Prop()
    observation: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
