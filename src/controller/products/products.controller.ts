import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDocument } from 'src/schemas/products/products.schema';
import { ProductsService } from './../../services/products/products.service';
import { IProductCreateDTO } from './dto/product-create.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { } // Ajustado aqui

    @Get()
    async find() {
        return { status: "created" };
    }

    @Post()
    async create(@Body() bodyProduct: ProductDocument): Promise<IProductCreateDTO> {
        return this.productsService.create(bodyProduct);
    }
}
