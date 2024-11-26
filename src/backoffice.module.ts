import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModelProvider } from './app/model/AppModelRepository';
import { AppModel, AppModelSchema } from './app/model/AppModel';
import { AppModelController } from './app/AppModelController';


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
    )
  ],
  controllers: [AppModelController],
  providers: [AppModelProvider],
  //exports:[AppModelProvider]

})

export class BackOfficeModule {

}
