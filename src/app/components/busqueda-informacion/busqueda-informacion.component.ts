import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-busqueda-informacion',
  templateUrl: './busqueda-informacion.component.html',
  styleUrls: ['./busqueda-informacion.component.css']
})
export class BusquedaInformacionComponent implements OnInit {

  busqueda;
  tunosAMostrar=[];
  totalTurnos;
  turno;
  constructor(private turnos:TurnosService) { }

  ngOnInit(): void {
    this.turnos.getTodosTurnos().subscribe(todos=>{
      this.totalTurnos = todos;
    })
  }
  

  buscar(){
    this.tunosAMostrar=[];
    let palabraClave = this.busqueda.toLocaleLowerCase();
    if(palabraClave.length!=0){
      this.totalTurnos.forEach(turno=>{
        if(turno.profesional.nombre.toLocaleLowerCase().includes(palabraClave)){
          this.agrega(this.tunosAMostrar,turno);
        }
        if(turno.profesional.apellido.toLocaleLowerCase().includes(palabraClave)){
          this.agrega(this.tunosAMostrar,turno);
        }
        if(turno.paciente.nombre.toLocaleLowerCase().includes(palabraClave)){
          this.agrega(this.tunosAMostrar,turno);
        }
        if(turno.paciente.apellido.toLocaleLowerCase().includes(palabraClave)){
          this.agrega(this.tunosAMostrar,turno);
        }
        if(turno.especialidad.descripcion.toLocaleLowerCase().includes(palabraClave)){
          this.agrega(this.tunosAMostrar,turno);
        }
        if(turno.historial!=null){
          turno.historial.forEach(element => {
            if(element.valor.toLocaleLowerCase().includes(palabraClave)){
              this.agrega(this.tunosAMostrar,turno);
            }
          });
        }
      }) 
    }else{
      this.tunosAMostrar=[];
    }
  }

  agrega(lista, turno){
    if(!this.contains(lista, turno)){
      lista.push(turno);
    }
  }

  contains(lista, turno){
    let contains = false;
    lista.forEach(prof=>{
      if(prof.id==turno.id){
        contains=true;
      }
    })
    return contains;
  }

  verDetalle(turno){
    console.log(turno);
    this.turno=turno;
  }
}
