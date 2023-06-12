import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from '../../services/orders/orders.service';
import { ICreateOrderResultDto } from './dto/create-order.dto';
import { OrderDocument, Order } from 'src/schemas/orders/order.schema';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService ) { }

    @Get()
    @ApiOperation({ summary: 'Get all orders' })
    @ApiResponse({ status: 200, description: 'Return all orders.' })
    async findAll() {
        return this.orderService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create a product' })
    @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
    @ApiBody({ type: Order })
    async create(@Body() createOrderDto: OrderDocument): Promise<ICreateOrderResultDto> {
        return this.orderService.create(createOrderDto);
    }

}
