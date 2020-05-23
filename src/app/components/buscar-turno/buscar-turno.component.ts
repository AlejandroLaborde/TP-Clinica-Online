import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Especialidad } from 'src/app/models/especialidad';

@Component({
  selector: 'app-buscar-turno',
  templateUrl: './buscar-turno.component.html',
  styleUrls: ['./buscar-turno.component.css']
})
export class BuscarTurnoComponent implements OnInit {

  formBuscar:FormGroup;

  @Input() especialidades:Especialidad[];
  @Output() seleccionaEspecialidad= new EventEmitter<Especialidad>();
  constructor(private formControl:FormBuilder) { }

  ngOnInit(): void {
    this.formBuscar = this.formControl.group({
      especialidad: new FormControl(null,[Validators.required])
    })
  }

  buscar(){
    if(this.formBuscar.valid){
      this.especialidades.forEach(element => {
        if(element.codigo == this.formBuscar.value.especialidad )
        this.seleccionaEspecialidad.emit(element);
      });
    }
  }

}
