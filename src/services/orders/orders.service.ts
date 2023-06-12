import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICreateOrderResultDto } from 'src/controller/orders/dto/create-order.dto';
import { Order, OrderDocument } from 'src/schemas/orders/order.schema';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async create(bodyRequest: OrderDocument): Promise<ICreateOrderResultDto> {
        const createdOrder = new this.orderModel(bodyRequest);
        await createdOrder.save();
        return { status: "created" }
    }

    async findAll(): Promise<OrderDocument[]> {
        return this.orderModel.find().exec();
    }
}
