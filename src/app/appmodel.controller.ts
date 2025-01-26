import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req } from "@nestjs/common";
import { AppModelProvider } from "./model/AppModelRepository";
import { AppListPageOutDto } from "./model/dto/applistpage.out.dto";
import { AppModelInDto, AppModelOutDto } from "./model/dto/appmodel.dto";

@Controller('backoffice/api/v1')
export class AppmodelController {
  constructor(private appModelProvider: AppModelProvider) {}

  @Get('/init')
  getAppsList(): Promise<AppListPageOutDto> {
    return this.appModelProvider.initPage()
  }

  @Get('/apps/:id')
  getAppById(@Param('id') id: string): Promise<AppModelOutDto> {
    return this.appModelProvider.getAppById(id);
  }

  @Post('/apps/insert')
  insertApp(@Body() dto: AppModelInDto){
    console.log(dto);
     this.appModelProvider.insertApp(dto);
     return {
       status: HttpStatus.CREATED,
       message: "Ok"
     }
  }
}