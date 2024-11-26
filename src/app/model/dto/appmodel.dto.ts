export interface AppModelOutDto {
  id: string;
  funzioniAbilitate: number[];
  abilTest: boolean;
  abilSvil: boolean;
  abilProd: boolean;
  labels: Array<object>;
  colors: Array<string>;
}

export interface AppModelInDto {
  id: string;
  funzioniAbilitate: number[];
  abilTest: boolean;
  abilSvil: boolean;
  abilProd: boolean;
  labels: Array<object>;
  colors: Array<string>;
}
