import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModelProvider } from './app/model/AppModelRepository';
import { AppModel, AppModelSchema } from './app/model/AppModel';
import { AppModelController } from './app/AppModelController';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/gymapp_db'),
    MongooseModule.forFeature(
      [
        {
          name: AppModel.name,
          schema: AppModelSchema
        }
      ]
    ),
    ConfigModule.forRoot({
      envFilePath: ['.env',`.${process.env.NODE_ENV || 'test'}.env`],
      isGlobal: true, // Rende le variabili disponibili in tutta l'app
    })
  ],
  controllers: [AppModelController],
  providers: [AppModelProvider],
  //exports:[AppModelProvider]

})


export class BackOfficeModule {

}
