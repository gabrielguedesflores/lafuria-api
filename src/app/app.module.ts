import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from '../controller/orders/orders.module';
import { ProductsModule } from 'src/controller/products/products.module';
import { UsersModule } from 'src/controller/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    ProductsModule, 
    OrdersModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
