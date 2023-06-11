import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from '../../services/orders/orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDocument } from 'src/schemas/orders/order.schema';

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService<OrderDocument>) { }

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.create(createOrderDto);
    }

}
