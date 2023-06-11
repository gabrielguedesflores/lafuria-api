import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDocument } from 'src/schemas/products/products.schema';
import { ProductsService } from './../../services/products/products.service';
import { IProductCreateDTO } from './dto/product-create.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { } // Ajustado aqui

    @Get()
    async findAll() {
        return this.productsService.findAll();
    }

    @Post()
    async create(@Body() bodyProduct: ProductDocument): Promise<IProductCreateDTO> {
        return this.productsService.create(bodyProduct);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updatedProduct: ProductDocument) {
        return this.productsService.update(id, updatedProduct);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.productsService.delete(id);
    }

    @Get('with-orders')
    async findProductsWithOrders() {
        return this.productsService.findProductsWithOrders();
    }
}
