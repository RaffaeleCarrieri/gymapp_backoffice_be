import { Controller, Get, HttpStatus } from "@nestjs/common";

@Controller('/heartbeat')
export class HeartbeatController {

  constructor() {}

  @Get()
  heartbeat(){
    return {
      status: HttpStatus.OK,
      timestamp: new Date().toISOString(),
      message: "Heartbeat"
    };
  }
}