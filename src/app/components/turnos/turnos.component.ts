import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { Especialidad } from 'src/app/models/especialidad';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { empty } from 'rxjs';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { TurnosService } from 'src/app/services/turnos.service';
import { LoginService } from 'src/app/services/login.service';
import { Turno } from 'src/app/models/turno';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  especialidadesList:Especialidad[];
  profesionales: Profesional[];
  turnos: Turno[];
  
  constructor( private especialidadesService:EspecialidadesService,
                private turnoService: TurnosService,
                private loginService: LoginService,
                private usuarioService:UsuariosService
                ) { 
    this.especialidadesService.obtenerEspecialidades().subscribe(resp=>{
      this.especialidadesList = resp;
    });
    this.usuarioService.getProfesionalesAprobado().subscribe(profesionales=>{
      this.profesionales=profesionales;
    })
  }

  ngOnInit(): void {
   
  }

  escuchaBuscar( seleccionado ){
    console.log(seleccionado);
  }
}
