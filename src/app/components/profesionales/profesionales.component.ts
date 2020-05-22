import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  @Output() habilitarSeleccion = new EventEmitter<Profesional>();
  @Input() profesionales:Profesional[];
  selected:Profesional;
  constructor() { }

  ngOnInit(): void {
  }

  seleccionado( profesional){
    this.selected=profesional;
  }

  habilitar(){
    this.habilitarSeleccion.emit(this.selected);
  }
}
