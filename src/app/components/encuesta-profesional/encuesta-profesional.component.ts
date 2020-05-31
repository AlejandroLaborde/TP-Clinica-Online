import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta-profesional',
  templateUrl: './encuesta-profesional.component.html',
  styleUrls: ['./encuesta-profesional.component.css']
})
export class EncuestaProfesionalComponent implements OnInit {

  encuesta:FormGroup;
  opcionesAtencion=[1,2,3,4,5];
  @Output() encuestaProfesional= new EventEmitter<any>();
  constructor(private miConstructor: FormBuilder ) { }

  ngOnInit(): void {
    this.encuesta = this.miConstructor.group({
      atencionProfesional: new FormControl('1', [ Validators.required]),
      puntualidadTurno: new FormControl(null, [ Validators.required]),
      funcionamientoClinica: new FormControl(50, [ Validators.required]),
      comentario: new FormControl('', [ Validators.required]),
    });
  }

  submit(){
    let encuestaRealizada= {atencionProfesional:this.encuesta.value.atencionProfesional,
                            puntualidadTurno:this.encuesta.value.puntualidadTurno,
                            funcionamientoClinica:this.encuesta.value.funcionamientoClinica,
                            comentario:this.encuesta.value.comentario}
    this.encuestaProfesional.emit(encuestaRealizada);
    Swal.fire({
      icon:'success',
      title:'Muchas gracias por responder la encuesta'
    })
  }

  
}
