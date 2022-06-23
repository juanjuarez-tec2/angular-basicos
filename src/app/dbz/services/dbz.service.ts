import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
      { nombre: 'Goku', poder: 15000 },
      { nombre: 'Vegeta', poder: 16000 }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    constructor() {
        console.log('dbz')
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes = [...this._personajes, personaje];
    }
}