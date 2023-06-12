import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProductCreateDTO } from 'src/controller/products/dto/product-create.dto';
import { Product, ProductDocument } from 'src/schemas/products/products.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) { }
    

    async create(bodyProduct: ProductDocument): Promise<IProductCreateDTO> {
        const createdProduct = new this.productModel(bodyProduct);
        await createdProduct.save();
        return { status: "created" };
    }

    async findAll(): Promise<ProductDocument[]> {
        return this.productModel.find().exec();
    }

    async update(productId: string, updatedProduct: ProductDocument): Promise<ProductDocument> {
        return this.productModel.findByIdAndUpdate(productId, updatedProduct, { new: true });
    }

    async delete(productId: string): Promise<any> {
        return this.productModel.findByIdAndRemove(productId);
    }
    
}
