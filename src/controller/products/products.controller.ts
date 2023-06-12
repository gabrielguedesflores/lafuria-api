import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDocument, Product } from 'src/schemas/products/products.schema';
import { ProductsService } from './../../services/products/products.service';
import { IProductCreateDTO } from './dto/product-create.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    @ApiOperation({ summary: 'Get all products' })
    @ApiResponse({ status: 200, description: 'Return all products.' })
    async findAll() {
        return this.productsService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create a product' })
    @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
    @ApiBody({ type: Product })
    async create(@Body() bodyProduct: ProductDocument): Promise<IProductCreateDTO> {
        return this.productsService.create(bodyProduct);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a product' })
    @ApiResponse({ status: 200, description: 'The product has been successfully updated.' })
    @ApiParam({ name: 'id', required: true, description: 'The id of the product' })
    @ApiBody({ type: Product })
    async update(@Param('id') id: string, @Body() updatedProduct: ProductDocument) {
        return this.productsService.update(id, updatedProduct);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a product' })
    @ApiResponse({ status: 200, description: 'The product has been successfully deleted.' })
    @ApiParam({ name: 'id', required: true, description: 'The id of the product' })
    async delete(@Param('id') id: string) {
        return this.productsService.delete(id);
    }

}
