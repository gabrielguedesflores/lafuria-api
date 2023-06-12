import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { OrdersService } from '../../services/orders/orders.service';
import { ICreateOrderResultDto } from './dto/create-order.dto';
import { OrderDocument, Order } from 'src/schemas/orders/order.schema';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService) { }

    @Get()
    @ApiOperation({ summary: 'Get all orders' })
    @ApiResponse({ status: 200, description: 'Return all orders.' })
    async findAll() {
        return this.orderService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create an order' })
    @ApiResponse({ status: 201, description: 'The order has been successfully created.' })
    @ApiBody({ type: Order })
    async create(@Body() createOrderDto: OrderDocument): Promise<ICreateOrderResultDto> {
        return this.orderService.create(createOrderDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update an order' })
    @ApiResponse({ status: 200, description: 'The order has been successfully updated.' })
    @ApiParam({ name: 'id', required: true, description: 'The id of the order' })
    @ApiBody({ type: Order })
    async update(@Param('id') id: string, @Body() updatedOrder: OrderDocument) {
        return this.orderService.update(id, updatedOrder);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete an order' })
    @ApiResponse({ status: 200, description: 'The order has been successfully deleted.' })
    @ApiParam({ name: 'id', required: true, description: 'The id of the order' })
    async delete(@Param('id') id: string) {
        return this.orderService.delete(id);
    }

}
