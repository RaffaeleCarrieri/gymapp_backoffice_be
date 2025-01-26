import { SchemaObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { ApiBody, ApiProperty, ApiResponse } from "@nestjs/swagger";


export class AppModelOutDto{
  @ApiProperty({
    description: "Id of the app",
    required: true,
    type: String,
  })
  id: string;

  @ApiProperty({
    description: "Contains App's Enabled Function Id",
    required: true,
    type: Array<Number>,
  })
  funzioniAbilitate: number[];

  @ApiProperty({
    description: "Flag who says if the App is Enabled in Test Environment",
    required: true,
    type: Boolean,
  })
  abilTest: boolean;

  @ApiProperty({
    description: "Flag who says if the App is Enabled in Svil Environment",
    required: true,
    type: Boolean,
  })
  abilSvil: boolean;

  @ApiProperty({
    description: "Flag who says if the App is Enabled in Production Environment",
    required: true,
    type: Boolean,
  })
  abilProd: boolean;

  @ApiProperty({
    description: "App's Labels in different languages",
    required: true,
    type: String,
  })
  labels: Array<object>;
  colors: Array<string>;
}


export class AppModelInDto{

  @ApiProperty({
    description: "Id of the app",
    required: true,
    type: String,
  })
  id: string;

  @ApiProperty({
    description: "Contains App's Enabled Function Id",
    required: true,
    type: Array<Number>,
  })
  funzioniAbilitate: number[];

  @ApiProperty({
    description: "Flag who says if the App is Enabled in Test Environment",
    required: true,
    type: Boolean,
  })
  abilTest: boolean;

  @ApiProperty({
    description: "Flag who says if the App is Enabled in Svil Environment",
    required: true,
    type: Boolean,
  })
  abilSvil: boolean;

  @ApiProperty({
    description: "Flag who says if the App is Enabled in Production Environment",
    required: true,
    type: Boolean,
  })
  abilProd: boolean;

  @ApiProperty({
    description: "App's Labels in different languages",
    required: true,
    type: String,
  })
  labels: Array<object>;

  @ApiProperty({
    description: "App's Colors List in hex format",
    required: true,
    type: String,
  })
  colors: Array<string>;
}


