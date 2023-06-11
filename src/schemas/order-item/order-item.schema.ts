import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class OrderItem {
    @Prop({ required: true })
    orderId: number;

    @Prop({ required: true })
    productId: number;

    @Prop({ required: true })
    quantity: number;
}

export type OrderItemDocument = OrderItem & Document;
export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
