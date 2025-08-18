import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async create(data: any): Promise<Product> {
    const newProduct = new this.productModel(data);
    return newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

async update(id: string, data: any): Promise<Product | null> {
  return this.productModel.findByIdAndUpdate(id, data, { new: true }).exec();
}

  async delete(id: string): Promise<any> {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}