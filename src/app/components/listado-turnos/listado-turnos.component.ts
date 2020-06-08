import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-turnos',
  templateUrl: './listado-turnos.component.html',
  styleUrls: ['./listado-turnos.component.css']
})
export class ListadoTurnosComponent implements OnInit {

  @Input() turnos;
  @Output() turnoSelected= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccion( turno ){
    this.turnoSelected.emit(turno);
  } 
}
 