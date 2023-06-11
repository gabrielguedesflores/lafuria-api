import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from '../../services/products/products.service';
import { Product, ProductSchema } from '../../schemas/products/products.schema';
import { OrderItem, OrderItemSchema } from 'src/schemas/order-item/order-item.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema },
            { name: OrderItem.name, schema: OrderItemSchema }
        ])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule { }
