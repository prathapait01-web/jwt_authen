import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
    MongooseModule.forRoot('mongodb+srv://prathaps:prathapS@cluster0.ubtaawq.mongodb.net/backend-api'),
    ProductModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
