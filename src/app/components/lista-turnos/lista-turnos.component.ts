import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turno } from 'src/app/models/turno';
import Swal from 'sweetalert2';
import { EncuestaProfesionalComponent } from '../encuesta-profesional/encuesta-profesional.component';

@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.css']
})
export class ListaTurnosComponent implements OnInit {

  @Input() turnos: Turno[];
  @Output() eliminar = new  EventEmitter<Turno>();
  @Output() contestarEncuesta = new  EventEmitter<Turno>();
  constructor() { }

  ngOnInit(): void {

  }

  verResena(turno:Turno){
    Swal.fire({
      title:'Reseña del profesional',
      text:turno.encuestaPaciente.resena,
      confirmButtonText:'Contestar Encuesta'
      
    }).then(value=>{
      if(value.value){
        this.contestarEncuesta.emit(turno);
      }
    })
  }

  eliminarTurno(turno){
    console.log(turno);
    this.eliminar.emit(turno);
  }
 
}
