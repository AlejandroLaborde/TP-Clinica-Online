import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Especialidad } from '../models/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private httpClient:HttpClient) {}

  obtenerEspecialidades(){
    return this.httpClient.get(`${environment.hostFirebase}especialidades.json`).pipe(map(resp=>this.objecToArray(resp)))
  }

  altaEspecialidad(especialidad:Especialidad){
    return this.httpClient.post(`${environment.hostFirebase}especialidades.json`,especialidad);
  }


  private objecToArray( datos: Object ){
    let especialidades:Especialidad[] = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let especialidad:Especialidad=new Especialidad(datos[key].descripcion,datos[key].activo,datos[key].duracion, key);
          especialidades.push(especialidad);
    })
    return especialidades;
  }



}
