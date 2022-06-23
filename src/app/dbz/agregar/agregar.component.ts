import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dbzService: DbzService) {}

  agregar() {
    if(!this.nuevo.nombre.trim().length) return;
    this.dbzService.agregarPersonaje(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
}
