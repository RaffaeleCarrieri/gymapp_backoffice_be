import { Controller, Get, Param, Put } from "@nestjs/common";
import { AppModelProvider } from "./model/appmodel.service";
import { AppListPageOutDto } from "./model/dto/applistpage.out.dto";
import { AppModelOutDto } from "./model/dto/appmodel.dto";
import { UpdateAppModelInDto, UpdateAppModelOutDto } from "./model/dto/updateappmodel.in.dto";

@Controller("backoffice/api/v1/app")
export class AppModelController{
  constructor(private appModelProvider: AppModelProvider) {}

  @Get("/init")
  getAppsList():Promise<AppListPageOutDto>{
    return this.appModelProvider.initPage()
  }

  /*
    questo endpoint serve per recuperare dal db o dal microservizio infoapp service
    e lo salva in cache, senza dover ogni volta richiamare il db/microservizio
  */
  @Get("/detail/:appId")
  getAppById(@Param('appId') appId:string):Promise<AppModelOutDto>{
    return this.appModelProvider.getAppModelById(appId);
  }

  @Put("/update")
  updateApp(dto:UpdateAppModelInDto):Promise<UpdateAppModelOutDto>{
    return this.appModelProvider.updateAppModel(dto);
  }
}