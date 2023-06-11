import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class OrderItem {
    @Prop({ required: true })
    @ApiProperty()
    orderId: number;

    @Prop({ required: true })
    @ApiProperty()
    productId: number;

    @Prop({ required: true })
    @ApiProperty()
    quantity: number;
}

export type OrderItemDocument = OrderItem & Document;
export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
