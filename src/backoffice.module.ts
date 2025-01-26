import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModelProvider } from './app/model/AppModelRepository';
import { AppModel, AppModelSchema } from './app/model/AppModel';
import { AppmodelController } from './app/appmodel.controller';
import { ConfigModule } from '@nestjs/config';
import { HeartbeatController } from "./app/heartbeat.controller";


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://raffaelecarrieridev:eScQIu87aB5DLwi2@cluster0.eyllm.mongodb.net/gymapp_db'
    ),
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
  controllers: [AppmodelController,HeartbeatController],
  providers: [AppModelProvider],
  //exports:[AppModelProvider]

})


export class BackOfficeModule {

}
