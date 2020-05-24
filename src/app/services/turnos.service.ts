import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Turno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(private httpClient: HttpClient) { }


  public altaTurno( turno:Turno ){
    return this.httpClient.post(`${environment.hostFirebase}/turnos.json`,turno);
  }

  public getTodosTurnos(){
    return this.httpClient.get(`${environment.hostFirebase}/turnos.json`);
  }

  public altaTurno_Profesional( turno:Turno, idProfesional: string ){
    return this.httpClient.post(`${environment.hostFirebase}/turno_profesional/${idProfesional}.json`,turno);
  }
  
  public getTurno_Profesional( idProfesional: string ){
    return this.httpClient.get(`${environment.hostFirebase}/turno_profesional/${idProfesional}.json`);
  }

  public listaTurnosDuracion30(){
    let horarios=[];
    
    horarios.push("8:00")
    horarios.push("8:30")
    horarios.push("9:00")
    horarios.push("9:30")
    horarios.push("10:00")
    horarios.push("10:30")
    horarios.push("11:00")
    horarios.push("11:30")
    horarios.push("12:00")
    horarios.push("12:30")
    horarios.push("13:00")
    horarios.push("13:30")
    horarios.push("14:00")
    horarios.push("14:30")
    horarios.push("15:00")
    horarios.push("15:30")
    horarios.push("16:00")
    horarios.push("16:30")
    horarios.push("17:00")
    horarios.push("17:30")
    horarios.push("18:00")
    horarios.push("18:30")
    horarios.push("19:00")
    return horarios;
  }

}
