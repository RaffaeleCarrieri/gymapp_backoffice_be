import { Controller, Get } from "@nestjs/common";
import { AppModelProvider } from "./model/AppModelRepository";
import { AppListPageOutDto } from "./model/dto/applistpage.out.dto";

@Controller("backoffice/api/v1")
export class AppModelController{
  constructor(private appModelProvider: AppModelProvider) {}

  @Get("/init")
  getAppsList():Promise<AppListPageOutDto>{
    return this.appModelProvider.initPage()
  }
}