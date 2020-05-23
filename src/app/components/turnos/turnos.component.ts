import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { Especialidad } from 'src/app/models/especialidad';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { empty } from 'rxjs';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  especialidadesList:Especialidad[];
  
  
  constructor( private especialidadesService:EspecialidadesService
                ) { 
    this.especialidadesService.obtenerEspecialidades().subscribe(resp=>{
      this.especialidadesList = resp;
    });
  }

  ngOnInit(): void {
   
  }

  escuchaBuscar( seleccionado ){
    console.log(seleccionado);
  }
}
