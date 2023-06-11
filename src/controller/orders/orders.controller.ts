import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from '../../services/orders/orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDocument, Order } from 'src/schemas/orders/order.schema';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService<OrderDocument>) { }

    @Post()
    @ApiOperation({ summary: 'Create a product' })
    @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
    @ApiBody({ type: Order })
    async create(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.create(createOrderDto);
    }

}
