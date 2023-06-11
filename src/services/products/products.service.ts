import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProductCreateDTO } from 'src/controller/products/dto/product-create.dto';
import { OrderItem, OrderItemDocument } from 'src/schemas/order-item/order-item.schema';
import { Product, ProductDocument } from 'src/schemas/products/products.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
        @InjectModel(OrderItem.name) private orderItemModel: Model<OrderItemDocument> 
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

    async findProductsWithOrders(): Promise<any> {
        return this.productModel.aggregate([
            {
                $lookup: {
                    from: "orderitems",
                    localField: '_id',
                    foreignField: 'productId',
                    as: 'orderitems'
                }
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    description: 1,
                    price: 1,
                    category: 1,
                    orderItems: {
                        $map: {
                            input: "$orderitems",
                            as: "item",
                            in: {
                                quantity: "$$item.quantity",
                                orderId: "$$item.orderId"
                            }
                        }
                    }
                }
            }
        ]).exec();
    }
    
}
