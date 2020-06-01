import { Pipe, PipeTransform } from '@angular/core';
import { Profesional } from '../models/profesional';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: Profesional, ...args: unknown[]): unknown {

    return value.nombre + " " + value.apellido;
  }

}
