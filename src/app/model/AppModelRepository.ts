import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { AppModel } from "./AppModel";
import { AppListPageOutDto } from "./dto/applistpage.out.dto";

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


}