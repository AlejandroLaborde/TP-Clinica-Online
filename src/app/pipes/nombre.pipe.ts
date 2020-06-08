import { Pipe, PipeTransform } from '@angular/core';
import { Profesional } from '../models/profesional';
import { Usuario } from '../models/usuario';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: Usuario, ...args: unknown[]): unknown {

    return value.nombre + " " + value.apellido;
  }

}
