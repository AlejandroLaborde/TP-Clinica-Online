import { Component, OnInit, Input } from '@angular/core';
import { Turno } from 'src/app/models/turno';

@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.css']
})
export class ListaTurnosComponent implements OnInit {

  @Input() turnos: Turno[];
  constructor() { }

  ngOnInit(): void {

  }

 
}
