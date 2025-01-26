import { ApiProperty } from "@nestjs/swagger";

export class AppListPageOutDto{
    @ApiProperty({
        description: "Ids of the app inserted into the database",
        type: Array<string>
    })
    appsAvaible:Array<string>;
}

