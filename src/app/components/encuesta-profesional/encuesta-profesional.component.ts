import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-encuesta-profesional',
  templateUrl: './encuesta-profesional.component.html',
  styleUrls: ['./encuesta-profesional.component.css']
})
export class EncuestaProfesionalComponent implements OnInit {

  encuesta:FormGroup;
  opcionesAtencion=[1,2,3,4,5];
  constructor(private miConstructor: FormBuilder ) { }

  ngOnInit(): void {
    this.encuesta = this.miConstructor.group({
      atencionProfesional: new FormControl('', [ Validators.required]),
      puntualidadTurno: new FormControl('', [ Validators.required]),
      institucion: new FormControl('', [ Validators.required]),
      funcionamientoClinica: new FormControl('', [ Validators.required]),
      comentario: new FormControl('', [ Validators.required]),
    });
  }

  
}
