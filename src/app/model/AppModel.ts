import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
//['ga_app_entity'])
@Schema({
  collection: 'ga_app_entity',
})
export class AppModel {

  @Prop(String)
  readonly idApp: string;

  @Prop([Number])
  funzioniAbilitate: Array<number>;
  
  @Prop(Boolean)
  abilTest: boolean;
  
  @Prop(Boolean)
  abilSvil: boolean;
  
  @Prop(Boolean)
  abilProd: boolean;
  
  @Prop(['labels'])
  labels: Array<object>;
  
  @Prop(['colors'])
  colors: Array<string>;

  constructor(
    id: string,
    funzioniAbilitate: number[],
    abilTest: boolean,
    abilSvil: boolean,
    abilProd: boolean,
    labels: Array<object>,
    colors: Array<string>,
    ){
    this.idApp = id;
    this.funzioniAbilitate = funzioniAbilitate;
    this.abilTest = abilTest;
    this.abilProd = abilProd;
    this.abilSvil = abilSvil;
    this.labels = labels;
    this.colors = colors;
    }
    
}

export const AppModelSchema = SchemaFactory.createForClass(AppModel)