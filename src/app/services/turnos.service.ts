import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Turno } from '../models/turno';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(private httpClient: HttpClient) { }


  public altaTurno( turno:Turno ){
    return this.httpClient.post(`${environment.hostFirebase}/turnos.json`,turno);
  }

  public getTodosTurnos(){
    return this.httpClient.get(`${environment.hostFirebase}/turnos.json`).pipe(map(resp=>{return this.objecToArray(resp)}));
  }

  public getTurnosProfesional( id:string ){
    return this.httpClient.get(`${environment.hostFirebase}/turnos.json`).pipe(map(resp=>{return this.filtraTurnosProfesional(resp,id)})).toPromise();
  }

  public getTurnosPaciente(idUsuario){
    return this.getTodosTurnos().pipe(map(resp=>{return this.filtraTurnosUsuario(resp,idUsuario)}));
  }
  
  public verDisponibilidad( idProfesinal:string, hora:string, dia:string){
    return this.getTurnosProfesional(idProfesinal).then( (turnos:Turno[])=>{
        let disponible = true;
        turnos.forEach(turno=>{
          console.log( hora,dia, turno.hora,turno.dia );
          if(turno.hora == hora && turno.dia==dia){
            disponible= false;
          }
        });
        return disponible;
    });
  }

  private filtraTurnosUsuario(lista, id){
    let turnos=[];
    this.objecToArray(lista).forEach((element:Turno)=>{
      if(element.paciente.id == id){
        turnos.push(element);
      }
    })
    return turnos;
  }

  private filtraTurnosProfesional(lista,id){
    let turnos=[];
    this.objecToArray(lista).forEach((element:Turno)=>{
      if(element.profesional.id == id){
        turnos.push(element);
      }
    })
    return turnos;
  }
  

  private objecToArray( datos: Object ){
    const turnos = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let turno: Turno = datos[key];
          turno.id=key;
          turnos.push(turno);
        
    })
    return turnos;
  }



  public listaTurnosDuracion30(){
    let horarios=[];
    
    horarios.push("8:00");
    horarios.push("8:30");
    horarios.push("9:00");
    horarios.push("9:30");
    horarios.push("10:00");
    horarios.push("10:30");
    horarios.push("11:00");
    horarios.push("11:30");
    horarios.push("12:00");
    horarios.push("12:30");
    horarios.push("13:00");
    horarios.push("13:30");
    horarios.push("14:00");
    horarios.push("14:30");
    horarios.push("15:00");
    horarios.push("15:30");
    horarios.push("16:00");
    horarios.push("16:30");
    horarios.push("17:00");
    horarios.push("17:30");
    horarios.push("18:00");
    horarios.push("18:30");
    return horarios;
  }

  public listaTurnosDuracion40(){
    let horarios=[];
    horarios.push("8:00");
    horarios.push("8:40");
    horarios.push("9:20");
    horarios.push("10:00");
    horarios.push("10:40");
    horarios.push("11:20");
    horarios.push("12:00");
    horarios.push("12:40");
    horarios.push("13:20");
    horarios.push("14:00");
    horarios.push("14:40");
    horarios.push("15:20");
    horarios.push("16:00");
    horarios.push("16:40");
    horarios.push("17:20");
    horarios.push("18:00");
    return horarios;
  }

  public listaTurnosDuracion20(){
    let horarios=[];
    horarios.push("8:00");
    horarios.push("8:20");
    horarios.push("8:40");
    horarios.push("9:00");
    horarios.push("9:20");
    horarios.push("9:40");
    horarios.push("10:00");
    horarios.push("10:20");
    horarios.push("10:40");
    horarios.push("11:00");
    horarios.push("11:20");
    horarios.push("11:40");
    horarios.push("12:00");
    horarios.push("12:20");
    horarios.push("12:40");
    horarios.push("13:00");
    horarios.push("13:20");
    horarios.push("13:40");
    horarios.push("14:00");
    horarios.push("14:20");
    horarios.push("14:40");
    horarios.push("15:00");
    horarios.push("15:20");
    horarios.push("15:40");
    horarios.push("16:00");
    horarios.push("16:20");
    horarios.push("16:40");
    horarios.push("17:00");
    horarios.push("17:20");
    horarios.push("17:40");
    horarios.push("18:00");
    horarios.push("18:20");
    horarios.push("18:40");
    return horarios;
  }

  public listaTurnosDuracion40Sabado(){
    let horarios=[];
    horarios.push("8:00");
    horarios.push("8:40");
    horarios.push("9:20");
    horarios.push("10:00");
    horarios.push("10:40");
    horarios.push("11:20");
    horarios.push("12:00");
    horarios.push("12:40");
    horarios.push("13:20");
    return horarios;
  }
  public listaTurnosDuracion30Sabado(){
    let horarios=[];
    
    horarios.push("8:00");
    horarios.push("8:30");
    horarios.push("9:00");
    horarios.push("9:30");
    horarios.push("10:00");
    horarios.push("10:30");
    horarios.push("11:00");
    horarios.push("11:30");
    horarios.push("12:00");
    horarios.push("12:30");
    horarios.push("13:00");
    horarios.push("13:30");

    return horarios;
  }

  public listaTurnosDuracion20Sabado(){
    let horarios=[];
    horarios.push("8:00");
    horarios.push("8:20");
    horarios.push("8:40");
    horarios.push("9:00");
    horarios.push("9:20");
    horarios.push("9:40");
    horarios.push("10:00");
    horarios.push("10:20");
    horarios.push("10:40");
    horarios.push("11:00");
    horarios.push("11:20");
    horarios.push("11:40");
    horarios.push("12:00");
    horarios.push("12:20");
    horarios.push("12:40");
    horarios.push("13:00");
    horarios.push("13:20");
    horarios.push("13:40");

    return horarios;
  }
}
