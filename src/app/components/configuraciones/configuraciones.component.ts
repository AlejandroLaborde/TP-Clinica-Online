import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Profesional } from 'src/app/models/profesional';
import { TurnosService } from 'src/app/services/turnos.service';
import { Especialidad } from 'src/app/models/especialidad';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {

  profesionales:Profesional[]
  constructor( private usuariosService: UsuariosService, 
                private turnoService:TurnosService,
                private especialidadesService:EspecialidadesService ) { }

  ngOnInit(): void {
    this.usuariosService.getProfesionales().subscribe(resp=>{
      this.profesionales=resp;
    })
  }

  habilitaProfesional( seleccion ){
    console.log(seleccion);
    this.usuariosService.habilitarProfesional(seleccion).subscribe( respondio=>{
      this.usuariosService.getProfesionales().subscribe(resp=>{
        this.profesionales=resp;
      })
    })
  }

  altaEspecialidad( especialidadNueva: Especialidad){
    especialidadNueva.activo=true;
    this.especialidadesService.altaEspecialidad(especialidadNueva).subscribe(resp=>{
      Swal.fire({
        icon:'success',
        title:'Se dio de alta especialidad'
      })
    })
  }

}
