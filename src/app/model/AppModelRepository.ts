import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { AppModel } from "./AppModel";
import { AppListPageOutDto } from "./dto/applistpage.out.dto";
import { AppModelInDto, AppModelOutDto } from "./dto/appmodel.dto";

@Injectable()
export class AppModelProvider{
    
    constructor(@InjectModel(AppModel.name) private appModel:Model<AppModel>){}

    async initPage():Promise<AppListPageOutDto>{

        let appList: AppModel[] = await this.appModel.find().exec();
        console.log(appList[0]);
        console.log(appList.map((app: AppModel) => app.idApp))
        return {
            appsAvaible: appList.map((app: AppModel) => app.idApp),
        }

    }

    // @ts-ignore
    async getAppById(id:string):Promise<AppModelOutDto>{
        let appModel = await this.appModel
          .findOne({idApp: id})
          .exec();

        return {
            id: appModel.idApp,
            funzioniAbilitate: appModel.funzioniAbilitate,
            abilTest: appModel.abilTest,
            abilSvil: appModel.abilSvil,
            abilProd: appModel.abilProd,
            labels: appModel.labels,
            colors: appModel.colors

        }

    }

     insertApp(app: AppModelInDto): void{
         let model:AppModel = {
             idApp: app.id,
             colors: app.colors,
             abilTest: app.abilTest,
             labels: app.labels,
             abilProd: app.abilProd,
             abilSvil: app.abilSvil,
             funzioniAbilitate:[]
         };
         this.appModel.insertMany(model);
    }


}