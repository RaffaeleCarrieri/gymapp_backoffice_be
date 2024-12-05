export class UpdateAppModelInDto{
    public idApp: string;
    public funzioniAbilitate: Array<number>;
    public abilTest: boolean;
    public abilSvil: boolean;
    public abilProd: boolean;
    public labels: Array<object>;
    public colors: Array<string>;
}

export class UpdateAppModelOutDto{
    public idApp: string;
    public funzioniAbilitate: Array<number>;
    public abilTest: boolean;
    public abilSvil: boolean;
    public abilProd: boolean;
    public labels: Array<object>;
    public colors: Array<string>;
}