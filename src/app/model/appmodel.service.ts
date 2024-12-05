import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { AppModel } from './appmodel.model';
import { AppListPageOutDto } from './dto/applistpage.out.dto';
import { AppModelInDto, AppModelOutDto } from './dto/appmodel.dto';
import { UpdateAppModelInDto, UpdateAppModelOutDto } from './dto/updateappmodel.in.dto';

@Injectable()
export class AppModelProvider {
  constructor(@InjectModel(AppModel.name) private appModel: Model<AppModel>) {}

  async initPage(): Promise<AppListPageOutDto> {
    const appList: AppModel[] = await this.appModel.find().exec();
    console.log(appList[0]);
    console.log(appList.map((app: AppModel) => app.idApp));
    return {
      appsAvaible: appList.map((app: AppModel) => app.idApp),
    };
  }

  async getAppModelById(idApp:string): Promise<AppModelOutDto>{
  
    let appModel:AppModel = await this.appModel.findOne({"idApp":idApp}).exec()
    console.log(appModel)
    const {abilProd,abilSvil,abilTest,colors,funzioniAbilitate,labels} = appModel;
    return {
      id: idApp,
      funzioniAbilitate: funzioniAbilitate,
      abilTest: abilTest,
      abilSvil: abilSvil,
      abilProd: abilProd,
      labels: labels,
      colors: colors
    };

  }

  
  async updateAppModel(dto:UpdateAppModelInDto):Promise<UpdateAppModelOutDto>{
    let appModel:AppModel = await this.appModel.findOneAndUpdate(
      {idApp:dto.idApp},
      dto
    ).exec()

    return {
      idApp : dto.idApp,
      abilProd : appModel.abilProd,
      abilSvil : appModel.abilSvil,
      colors : appModel.colors,
      abilTest : appModel.abilTest,
      funzioniAbilitate : appModel.funzioniAbilitate,
      labels : appModel.labels
    
    }
  }

}
