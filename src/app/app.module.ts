import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from '../controller/orders/orders.module';
import { ProductsModule } from 'src/controller/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    ProductsModule, 
    OrdersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
