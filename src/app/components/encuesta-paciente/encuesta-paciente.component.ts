import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta-paciente',
  templateUrl: './encuesta-paciente.component.html',
  styleUrls: ['./encuesta-paciente.component.css']
})
export class EncuestaPacienteComponent implements OnInit {

  encuesta:FormGroup;
  @Output() encuestaPaciente= new EventEmitter<any>();

  constructor(private miConstructor: FormBuilder ) { }

  ngOnInit(): void {
    this.encuesta = this.miConstructor.group({
      puntualidadTurno: new FormControl(null, [ Validators.required]),
      funcionamientoClinica: new FormControl(50, [ Validators.required]),
      resena: new FormControl('', [ Validators.required]),
    });
  }

  submit(){
    let encuestaRealizada= {puntualidadTurno:this.encuesta.value.puntualidadTurno,
                            funcionamientoClinica:this.encuesta.value.funcionamientoClinica,
                            resena:this.encuesta.value.resena}
    this.encuestaPaciente.emit(encuestaRealizada);
    Swal.fire({
      icon:'success',
      title:'Muchas gracias por responder la encuesta'
    })
  }


}
