import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  salutaPersone(persone: string[]): string {
    let saluta = 'Ciao a ';
    persone.map(
      (p)=>saluta = saluta.concat(p+" ")
    )
    return saluta;
  }

  salutaPersona(persona:string){
    return "Ciao "+persona;
  }
}
