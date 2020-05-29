import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Especialidad } from 'src/app/models/especialidad';

@Component({
  selector: 'app-alta-especialidades',
  templateUrl: './alta-especialidades.component.html',
  styleUrls: ['./alta-especialidades.component.css']
})
export class AltaEspecialidadesComponent implements OnInit {

  @Output() nuevaEspecialidad = new EventEmitter<Especialidad>()
  especialidadNueva;
  duracion=30;
  constructor() { }

  ngOnInit(): void {
  }

  alta(){
    if(this.especialidadNueva){
      this.nuevaEspecialidad.emit(new Especialidad(this.especialidadNueva,false,this.duracion));
      this.especialidadNueva=null;
    }
  }
}
