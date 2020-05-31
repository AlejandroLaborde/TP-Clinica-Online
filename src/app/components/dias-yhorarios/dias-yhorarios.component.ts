import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Dia } from 'src/app/models/dia';

@Component({
  selector: 'app-dias-yhorarios',
  templateUrl: './dias-yhorarios.component.html',
  styleUrls: ['./dias-yhorarios.component.css']
})
export class DiasYHorariosComponent implements OnInit {

  diasYhorarios:FormGroup;
  dias:Dia[];
  listaHorarios:string[]=['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];
  listaHorariossalida:string[]=['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];
  @Input() diasProfesional:Dia[];
  @Output() diasProfesionalchange= new EventEmitter<any>();
  constructor( private miConstructor:FormBuilder) {
    
   }

  ngOnInit(): void {
 
  }

  guardar(){
    
    this.diasProfesionalchange.emit(this.diasProfesional);
  }



}
