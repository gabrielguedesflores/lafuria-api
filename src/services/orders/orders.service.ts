import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateOrderDto } from 'src/controller/orders/dto/create-order.dto';

@Injectable()
export class OrdersService<T> {
    constructor(private orderModel: Model<T>) { }

    async create( bodyRequest: CreateOrderDto): Promise<T> {
        console.log('order service create', bodyRequest);
        const createdOrder = new this.orderModel(bodyRequest);
        return createdOrder.save();
    }

    // inclua outros métodos conforme necessário
}
