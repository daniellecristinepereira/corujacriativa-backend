import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://daniellepereira:Dani384385@cluster0.ru3m6ix.mongodb.net/corujacriativa?retryWrites=true&w=majority'),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


