import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    @ApiProperty()
    name: string;
    
    @Prop()
    @ApiProperty()
    description: string;

    @Prop()
    @ApiProperty()
    category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
