import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req } from "@nestjs/common";
import { AppModelProvider } from "./model/AppModelRepository";
import { AppListPageOutDto } from "./model/dto/applistpage.out.dto";
import { AppModelInDto, AppModelOutDto } from "./model/dto/appmodel.dto";
import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AppModel } from "./model/AppModel";

@Controller('backoffice/api/v1')
export class AppmodelController {
  constructor(private appModelProvider: AppModelProvider) {}

  @ApiOperation({
    summary: "init",
    description: "Get the app list",
  })
  @ApiResponse({
    status: 200,
    type: AppListPageOutDto,
  })
  @Get('/init')
  getAppsList(): Promise<AppListPageOutDto> {
    return this.appModelProvider.initPage()
  }

  @ApiOperation({
    summary: 'getAppbyId',
    description: "Get the App by Its Id",
  })
  @Get('/apps/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: AppModelOutDto
  })
  getAppById(@Param('id') id: string): Promise<AppModelOutDto> {
    return this.appModelProvider.getAppById(id);
  }

  @ApiOperation({
    summary: 'insertApp',
    description: "Inserts a new App into DB",
  })
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