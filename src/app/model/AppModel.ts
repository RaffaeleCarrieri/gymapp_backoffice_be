import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
//['ga_app_entity'])
@Schema({
  collection: 'ga_app_entity',
})
export class AppModel {

  @Prop(['idApp'])
  private id: string;

  @Prop(['funzioniAbilitate'])
  private funzioniAbilitate: Array<number>;
  
  @Prop(['abilTest'])
  private abilTest: boolean;
  
  @Prop(['abilSvil'])
  private abilSvil: boolean;
  
  @Prop(['abilProd'])
  private abilProd: boolean;
  
  @Prop(['labels'])
  private labels: Array<object>;
  
  @Prop(['colors'])
  private colors: Array<string>;

  constructor(
    id: string,
    funzioniAbilitate: number[],
    abilTest: boolean,
    abilSvil: boolean,
    abilProd: boolean,
    labels: Array<object>,
    colors: Array<string>,
    ){
    this.id = id;
    this.funzioniAbilitate = funzioniAbilitate;
    this.abilTest = abilTest;
    this.abilProd = abilProd;
    this.abilSvil = abilSvil;
    this.labels = labels;
    this.colors = colors;
    }
    

}

export const AppModelSchema = SchemaFactory.createForClass(AppModel)